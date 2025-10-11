import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/short_url.service.js";
import { generateNanoId } from "../utils/helper.js";
import wrapAsync from "../utils/trycatchwrapper.js";

export const createShortUrl = wrapAsync(async (req, res) => { 
    const data = req.body;
    let shortUrl
    if(req.user) {
        shortUrl = await createShortUrlWithUser(data.url, req.user._id, data.slug)
    }else {

        shortUrl = await createShortUrlWithoutUser(url);
    }
    res.status(200).json({shortUrl: process.env.APP_URL + shortUrl});
})

export const redirectFromShortUrl = wrapAsync(async (req, res) => {

    
    const {shortUrl} = req.params;
    const url = await getShortUrl(shortUrl);
    if(!url) throw new Error("Short url not found");
    res.redirect(url.full_url);
    
})

export const createcustomShortUrl = wrapAsync (async (req, res) => {
    const {url, slug} = req.body;
    const shortUrl = await createShortUrlWithoutUser(url.slug);
    res.status(200).json({shortUrl: process.env.APP_URL + shortUrl});
})