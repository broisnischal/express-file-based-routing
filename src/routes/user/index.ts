import { Handler, Request, Response, NextFunction } from "express";
import log from "../../middlewares/log.js";

export const get = [
  log(),
  async (req: Request, res: Response) => {
    return res.json({ hello: "user" });
  },
];
