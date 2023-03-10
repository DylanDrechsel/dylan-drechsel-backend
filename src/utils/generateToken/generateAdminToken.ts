import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateOwnerToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_ADMIN_SECRET, {
    expiresIn: "7d",
  });
};

export default generateOwnerToken;