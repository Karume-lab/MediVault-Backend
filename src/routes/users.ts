import { Router } from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers";

const userRouter = Router();

userRouter.post("/users", addUser);
userRouter.get("/users", getUsers);
userRouter.get("/users/:id", getUser);
userRouter.put("/users/:id", updateUser);
userRouter.delete("/users/:id", deleteUser);

export default userRouter;
