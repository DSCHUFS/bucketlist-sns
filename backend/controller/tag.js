const tagQuery = require('../queries/tag')
const { exportsValue } = require('../lib/obj')

exports.followingTagAPI = async(req, res) => {
    try {
        const user_id = res.user_id
        const { tag_name, following } = req.body
        let find_tag = await res.pool.query(tagQuery.CHECK_TAG_EXIST, [tag_name])
        if(following === 'following' && find_tag[0].length === 0) {
            await res.pool.query(tagQuery.ADD_TAG, [tag_name])
        }
        const following_query = (following === 'unfollowing') ? tagQuery.UNFOLLOWING_TAG : tagQuery.FOLLOWING_TAG

        let ex_check = await res.pool.query(tagQuery.CHECK_FOLLOWING_EXIST, [user_id, tag_name])
        if((ex_check[0].length === 0 && following === 'following') || (ex_check[0].length !== 0 && following === 'unfollowing')) {
            await res.pool.query(following_query, [user_id, tag_name])
        } else {
            throw e
        }
        res.status(200).json({'msg' : `${following} ${tag_name}`})
    } catch(e) {
        console.log(e)
        res.status(400).json({'msg':`following tag failed`})
    }
}

exports.userFollowingListAPI = async(req, res) => {
    try{
        const user_id = res.user_id
        const get_user = req.params.user_id
        let result = await res.pool.query(tagQuery.FOLLOWING_LIST, [get_user])
        const tags = (result[0].length === 0) ? `No following tags` : await exportsValue(result[0], 'tag_name')
        res.status(200).json({'msg': 'user following tags', 'tags' : tags})
    } catch(e) {
        console.log(e)
        res.status(400).json({'msg':`Invalid user id`})
    }
}