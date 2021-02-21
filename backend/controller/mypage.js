const { exportsValue } = require('../lib/obj')
// const mypageQuery = require('../queries/mypage')
const url = 'http://localhost:3001/'
exports.mypageAPI = async(req, res) => {
    try {
        const user_id = res.user_id
        let info = await res.pool.query(`SELECT user_email, user_name, user_birth, user_death, user_profile_image, user_profile_detail FROM Users WHERE user_id = ?;`, [user_id])
        let tags = await res.pool.query(`SELECT tag_name FROM FollowingTags WHERE user_id = ?;`, [user_id])
        info = info[0][0]
        tags = await exportsValue(tags[0], 'tag_name')
        console.log(tags)
        user_info = { 
            email : info.user_email, 
            name : info.user_name, 
            birth : info.user_birth,
            death : info.user_death,
            profile_image : url + info.user_profile_image,
            profile_detail : info.user_profile_detail,
            following_tags : tags
        }
        
        res.status(200).json({'msg' : `user profile`, 'info' : user_info})
    } catch(e) {
        console.log(e)
        res.status(400)
    }
}