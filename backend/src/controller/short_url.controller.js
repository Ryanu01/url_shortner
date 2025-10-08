import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlWithoutUser } from "../services/short_url.service.js";
import { generateNanoId } from "../utils/helper.js";

export const createShortUrl = async (req, res) => {
    const {url} = req.body;
    const shortUrl = await createShortUrlWithoutUser(url);
    res.send(process.env.APP_URL + shortUrl);
}

export const redirectFromShortUrl = async (req, res) => {
    const {shortUrl} = req.params;
    const url = await getShortUrl(shortUrl);
    res.redirect(url.full_url);
}