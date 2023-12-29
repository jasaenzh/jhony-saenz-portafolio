import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const authorizationHeader = req.headers.authorization;
  const token = authorizationHeader && authorizationHeader.split(' ')[1];

  if (!JWT_SECRET) {
    return res.status(500).json({ msg: "JWT_SECRET no está definido en las variables de entorno" });
  }

  if (!token) return res.status(401).json({ message: "No hay token" });

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token expirado' });
      }
      return res.status(401).json({ message: 'Token no válido' });
    }

    // Agregar el token al objeto req.user
    (req as any).user = { ...user, token };

    next();
  });
};
