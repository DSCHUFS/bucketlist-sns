const { exportsValue } = require('../lib/obj')
const mypageQuery = require('../queries/mypage')
const url = 'http://localhost:3001/'

exports.mypageAPI = async(req, res) => {
    try {
        const user_id = res.user_id
        let info = await res.pool.query(mypageQuery.SELECT_USER_INFO, [user_id])
        let tags = await res.pool.query(mypageQuery.SELECT_FOLLOWING_TAGS, [user_id])
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

exports.profileUpdateAPI = async(req, res) => {
    try{
        const user_id = res.user_id
        const { name, birth, death, profile_image, profile_detail } = req.body // image는 file받는 걸로 변경해야함
        let info = [name, birth, death, profile_image, profile_detail, user_id]
        await res.pool.query(mypageQuery.UPDATE_USER_INFO, info)
        res.status(200).json({'msg':`profile update success`})
    } catch(e) {
        console.log(e)
        res.status(400)
    }
}