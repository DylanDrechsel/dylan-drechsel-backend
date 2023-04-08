import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const adminSecret: any = process.env.JWT_ADMIN_SECRET

const generateOwnerToken = (id: string) => {
  return jwt.sign({ id }, adminSecret, {
    expiresIn: "7d",
  });
};

export default generateOwnerToken;