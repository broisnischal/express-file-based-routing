import { Handler, Request, Response, NextFunction } from "express";
import log from "../../middlewares/log.js";
import client from "../../db.js";

export const get = [
  log(),
  async (req: Request, res: Response) => {
    return res.json({ hello: "user" });
  },
];

export const post = 
  async( req: Request, res: Response) => {
    const name = req.body.name;
    const email = req.body.email;
  
   
    if (!name || !email) {
      return res.status(400).json({ message: "name and email are required" });
    }
    
    const newUser = await client.user.create({
      data: {
        name,email
      }
    })
  
    return res.json(newUser);
  }
