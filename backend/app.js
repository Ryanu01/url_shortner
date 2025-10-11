import express from 'express';
import { nanoid } from 'nanoid';
import dotenv from 'dotenv';
import connectDB from './src/config/mongo.config.js';
import urlSchema from './src/models/shorturl.model.js';
import short_url from "./src/routes/short_url.route.js"
import { redirectFromShortUrl } from './src/controller/short_url.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';
import cors from "cors";
import authRoutes from "./src/routes/auth.routes.js";
import { attachUser } from './src/utils/attachuser.js';
import  cookieParser from "cookie-parser";

const PORT = 3000;
const app = express();
dotenv.config("./.env");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(attachUser);
app.use('/api/auth', authRoutes);
app.use('/api/create', short_url);
app.use('/:shortUrl', redirectFromShortUrl);

app.use(errorHandler);
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is runing on port: ${PORT}`);
}) 

