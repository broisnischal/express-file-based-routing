import { NextFunction, Request, Response } from "express";

export const log = () => (req: Request, res: Response, next: NextFunction) => {
  console.log("I am middleware");
  next();
};

export default log;
