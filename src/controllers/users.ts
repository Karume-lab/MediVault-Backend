import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { timestampToDate } from "../utils";
import { UserPayload } from "../payloads";
import { User } from "../entities";
import { UserStorage } from "../storages";

const addUser = (req: Request<UserPayload>, res: Response<User | any>) => {
  try {
    const user: User = {
      id: uuid(),
      createdAt: timestampToDate(),
      updatedAt: null,
      ...req.body,
    };
    UserStorage.insert(user.id, user);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ UnexpectedError: "Could not add user" });
  }
};

const getUser = (req: any, res: Response<User | any>) => {
  try {
    const userOpt = UserStorage.get(req.params.id);
    if ("None" in userOpt) {
      return res.status(404).json({ NotFound: "User does not exist" });
    }
    return res.status(200).json(userOpt.Some);
  } catch (error) {
    return res.status(404).json({ UnexpectedError: "Could not get user" });
  }
};

const getUsers = (req: Request, res: Response) => {
  try {
    const users = UserStorage.values();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(404).json({ UnexpectedError: "Could not get users" });
  }
};

const updateUser = (req: Request, res: Response) => {
  try {
    const userOpt = UserStorage.get(req.params.id);
    if ("None" in userOpt) {
      return res.status(404).json({ NotFound: "User does not exist" });
    }
    const user: User = {
      ...userOpt.Some,
      ...req.body,
      updatedAt: timestampToDate(),
    };
    UserStorage.insert(user.id, user);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ UnexpectedError: "Could not get user" });
  }
};

const deleteUser = (req: Request, res: Response) => {
  try {
    const deletedUser = UserStorage.remove(req.params.id);
    if ("None" in deleteUser) {
      return res.status(404).json({ NotFound: "User does not exist" });
    } else {
      res.json(deletedUser.Some);
    }
  } catch (error) {}
};

export { addUser, getUser, getUsers, updateUser, deleteUser };
