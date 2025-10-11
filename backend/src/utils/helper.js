import { nanoid } from "nanoid"
import jsonwebtoken from "jsonwebtoken";
import { cookieOptions } from "../config/config.js";
import dotenv from "dotenv"
dotenv.config();
export const generateNanoId = (lenght) => {
    return nanoid(lenght);
}

export const signToken = (payload) => {
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET, {expiresIn: "5m"});
}

export const verifyToken = (token) => {
    const decoded =  jsonwebtoken.verify(token, process.env.JWT_SECRET);
    return decoded.id;
}