import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../models/shorturl.model.js";
import { getCustomShortUrl, saveShortUrl } from "../dao/short_url.js";

export const createShortUrlWithoutUser = async (url) => {
    const shortUrl = generateNanoId(7);
    if(!shortUrl) {
        throw new Error("Short url is not generated");
    }
    await saveShortUrl(shortUrl, url);
    return shortUrl;
}

export const createShortUrlWithUser = async (url, userId, slug=null) => {
    const shortUrl = slug || generateNanoId(7);
    const exits = await getCustomShortUrl(slug);
    if(exits) throw new Error("This custom url already exits")
    await saveShortUrl(shortUrl, url, userId);
    return shortUrl;
}