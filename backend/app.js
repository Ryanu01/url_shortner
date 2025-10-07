import express from 'express';
import { nanoid } from 'nanoid';
import dotenv from 'dotenv';
import connectDB from './src/config/mongo.config.js';
import urlSchema from './src/models/shorturl.model.js';

dotenv.config("./.env");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/api/create', (req, res) => {
    const {url} = req.body;
    const shortUrl = nanoid(7);
    const newUrl = new urlSchema({
        full_url: url,
        short: shortUrl
    })
    newUrl.save()
    res.send(nanoid(7))    
})


app.get('/:shortUrl', async(req, res) => {
    const {shortUrl} = req.params;
    const url = await urlSchema.findOne({short: shortUrl});
    if(url) {
        res.redirect(url.full_url);
    }else {
        res.status(404).send("Not Found");
    }
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is runing on port: ${PORT}`);
}) 

