import { Handler, Request, Response, NextFunction } from "express";

export const get = async (req: Request, res: Response) => {
  return res.json({ hello: req.params.name });
};
