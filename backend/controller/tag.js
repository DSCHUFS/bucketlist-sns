const db = require('../config/database')
const tagQuery = require('../queries/tag')

exports.followingTagAPI = async(req, res) => {
    try {
        const { tag_name, following } = req.body

        // email 중복 체크
        const check_email = await db.promise().query(signupQuery.EMAIL_CHECK, [email])
        if(check_email[0].length > 0) {
            res.status(400).json({'msg' : `duplicate email`})
        }

        // pw 암호화 후 user정보 db 저장
        bcrypt.hash(password, saltRounds, async function(err, hash) {
            console.log(hash)
            await db.promise().query(signupQuery.USER_INSERT, [email, hash, name, birth, death, profile_image, profile_detail])
            res.status(200).json({'msg' : `signup success`})
        })
    } catch(e) {
        console.log(e)
        res.status(400)
    }
}