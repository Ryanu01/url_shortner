import express from 'express';
import { nanoid } from 'nanoid';
import dotenv from 'dotenv';
import connectDB from './src/config/mongo.config.js';
import urlSchema from './src/models/shorturl.model.js';
import short_url from "./src/routes/short_url.route.js"
import { redirectFromShortUrl } from './src/controller/short_url.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';
import cors from "cors";
dotenv.config("./.env");
const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/create', short_url);


app.use('/:shortUrl', redirectFromShortUrl);

app.use(errorHandler);
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is runing on port: ${PORT}`);
}) 

