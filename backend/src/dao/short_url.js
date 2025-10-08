import urlSchema from "../models/shorturl.model.js";
// import { ConflictError } from "../utils/errorHandler";

export const saveShortUrl = async(shortUrl, longUrl, userId) => {
    const newUrl = new urlSchema({
        full_url: longUrl,
        short: shortUrl
    })
    if(userId) {
        newUrl.user_id = userId;
    }
    newUrl.save();
};


export const getShortUrl = async (shortUrl) => {
    return await urlSchema.findOneAndUpdate({short: shortUrl}, {$inc:{clicks:1}});
}

// export const getCustomShortUrl = async (slug) => {
//     return await urlSchema.findOne({short: slug});
// }