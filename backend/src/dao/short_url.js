import urlSchema from "../models/shorturl.model.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrl = async(shortUrl, longUrl, userId) => {
    try {
        const newUrl = new urlSchema({
            full_url: longUrl,
            short: shortUrl
        })
        if(userId) {
            newUrl.user = userId;
        }
        await newUrl.save();
        
    } catch (error) {
        if(error.code === 11000) {
            throw new ConflictError("Short url already exits");
        }
        throw new Error(error);
    }
};


export const getShortUrl = async (shortUrl) => {
    return await urlSchema.findOneAndUpdate({short: shortUrl}, {$inc:{clicks:1}});
}

export const getCustomShortUrl = async (slug) => {
    return await urlSchema.findOne({short: slug});
}