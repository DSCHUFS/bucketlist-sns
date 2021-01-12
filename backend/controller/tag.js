const express = require('express')
const db = require('../config/database')
const tagQuery = require('../queries/tag')

// 이미 있는 tag들 중 following/unfollowing
exports.followingTagAPI = async(req, res) => {
    try {
        const user_id = res.user_id
        const { tag_name, following } = req.body
        const following_query = (following === 'unfollowing') ? tagQuery.UNFOLLOWING_TAG : tagQuery.FOLLOWING_TAG

        await db.promise().query(following_query, [user_id, tag_name])
        res.status(200).json({'msg' : `${following} ${tag_name}`})
    } catch(e) {
        console.log(e)
        res.status(400)
    }
}

exports.userFollowingListAPI = async(req, res) => {
    try{
        const user_id = res.user_id
        let result = await db.promise().query(tagQuery.FOLLOWING_LIST, [user_id])
        const msg = (result[0].length === 0) ? `No following tags` : result[0].map(result => result.tag_name)
        res.status(200).json({'msg':`${msg}`})
    } catch(e) {
        console.log(e)
        res.status(400)
    }
}