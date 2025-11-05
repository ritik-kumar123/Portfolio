const rateLimit = require("express-rate-limit");
const contactLimiter = rateLimit({
    windowMs:60*1000,
    max:3, // 3 messages per minute per ip
    message:"Too many request,please try again later.",
})

module.exports = contactLimiter;