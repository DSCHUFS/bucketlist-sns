const jwt = require('jsonwebtoken')
const secretKey = require('../../config/jwt').secretKey

const verifyToken = (req, res, next) => {
    try {
        const user_token = req.headers.authorization
        // console.log(`user_token : ${user_token}`)
        const decode = jwt.verify(user_token, secretKey)
        if(decode) {
            const user_id = decode.id
            console.log(`jwt autorization success, user_id : ${user_id}`)
            res.user_id = user_id
            next()
        }
    } catch(e) {
        console.log(e)
        res.status(400).json(`token error`)
    }
}

exports.verifyToken = verifyToken