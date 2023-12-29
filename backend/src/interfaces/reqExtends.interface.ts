import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

interface UserWithToken extends JwtPayload {
  token: string;
}

export interface RequestExtends extends Request {
  user?: UserWithToken;
}