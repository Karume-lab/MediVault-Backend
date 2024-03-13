import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { timestampToDate } from "../utils";
import { RequestAccessPayload } from "../payloads";
import { RequestAccess } from "../entities";
import { RequestAccessStorage } from "../storages";

const addRequestAccess = (
  req: Request<RequestAccessPayload>,
  res: Response<RequestAccess | any>
) => {
  try {
    const requestAccess: RequestAccess = {
      id: uuid(),
      createdAt: timestampToDate(),
      updatedAt: null,
      ...req.body,
    };
    RequestAccessStorage.insert(requestAccess.id, requestAccess);
    return res.status(200).json(requestAccess);
  } catch (error) {
    return res
      .status(404)
      .json({ UnexpectedError: "Could not request access" });
  }
};

const getRequestAccess = (req: any, res: Response<RequestAccess | any>) => {
  try {
    const requestAccessOpt = RequestAccessStorage.get(req.params.id);
    if ("None" in requestAccessOpt) {
      return res
        .status(404)
        .json({ NotFound: "Request access does not exist" });
    }
    return res.status(200).json(requestAccessOpt.Some);
  } catch (error) {
    return res
      .status(404)
      .json({ UnexpectedError: "Could not get request access" });
  }
};

const getRequestAccesses = (req: Request, res: Response) => {
  try {
    const requestAccesses = RequestAccessStorage.values();
    return res.status(200).json(requestAccesses);
  } catch (error) {
    return res
      .status(404)
      .json({ UnexpectedError: "Could not get request accesses" });
  }
};

const updateRequestAccess = (req: Request, res: Response) => {
  try {
    const requestAccessOpt = RequestAccessStorage.get(req.params.id);
    if ("None" in requestAccessOpt) {
      return res
        .status(404)
        .json({ NotFound: "Request access does not exist" });
    }
    const requestAccess: RequestAccess = {
      ...requestAccessOpt.Some,
      ...req.body,
      updatedAt: timestampToDate(),
    };
    RequestAccessStorage.insert(requestAccess.id, requestAccess);
    return res.status(200).json(requestAccess);
  } catch (error) {
    return res
      .status(404)
      .json({ UnexpectedError: "Could not get request access" });
  }
};

const deleteRequestAccess = (req: Request, res: Response) => {
  try {
    const deletedRequestAccess = RequestAccessStorage.remove(req.params.id);
    if ("None" in deletedRequestAccess) {
      return res
        .status(404)
        .json({ NotFound: "Request access does not exist" });
    } else {
      res.json(deletedRequestAccess.Some);
    }
  } catch (error) {
    return res
      .status(404)
      .json({ UnexpectedError: "Could not delete request access" });
  }
};

export {
  addRequestAccess,
  getRequestAccess,
  getRequestAccesses,
  updateRequestAccess,
  deleteRequestAccess,
};
