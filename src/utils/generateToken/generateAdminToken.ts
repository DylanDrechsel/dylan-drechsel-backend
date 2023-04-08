import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const ownerSecret: any = process.env.JWT_OWNER_SECRET

const generateOwnerToken = (id: string) => {
  return jwt.sign({ id }, ownerSecret, {
    expiresIn: "7d",
  });
};

export default generateOwnerToken;