import { Request, Response } from "express";
import client from "../db.js";

export const get = async (req: Request, res: Response) => {
  if (req.method !== "GET") return res.status(405);

  const users = await client.user.findMany();
  

  return res.json({ hello: users });
};
