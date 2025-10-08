import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlWithoutUser } from "../services/short_url.service.js";
import { generateNanoId } from "../utils/helper.js";
import wrapAsync from "../utils/trycatchwrapper.js";

export const createShortUrl = wrapAsync(async (req, res) => {

    
    const {url} = req.body;
    const shortUrl = await createShortUrlWithoutUser(url);
    res.send(process.env.APP_URL + shortUrl);
    })

export const redirectFromShortUrl = wrapAsync(async (req, res) => {

    
    const {shortUrl} = req.params;
    const url = await getShortUrl(shortUrl);
    if(!url) throw new Error("Short url not found");
    res.redirect(url.full_url);
    
})
