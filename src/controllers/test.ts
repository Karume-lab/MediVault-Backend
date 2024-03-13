import { Request, Response } from "express";

const test = async (req: Request, res: Response) => {
  try {
    return res.status(200).json("Testing ...");
  } catch (error) {
    return res.status(404).json({ notFound: "Server Error" });
  }
};

export default test;
