import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import {findUserByEmail, createUser} from "../dao/user.dao.js";
import { ConflictError } from "../utils/errorHandler.js";
import { signToken } from "../utils/helper.js";

export const registerUser = async (name, email, password) => {
    const user = await findUserByEmail(email);
    if(user) throw new ConflictError("User already exists");
    const newUser = await createUser(name, email, password);
    const token =  signToken({id: newUser._id});
    return token;
}