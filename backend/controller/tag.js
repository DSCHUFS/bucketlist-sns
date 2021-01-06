const express = require('express')
const db = require('../config/database')
const tagQuery = require('../queries/tag')

const findTagId = async (tag_name) => {
    let result = await db.promise().query('SELECT tag_id FROM Tags WHERE tag_name = ?;', [tag_name])
    result = result[0][0]
    return result
}

exports.followingTagAPI = async(req, res) => {
    try {
        const user_id = res.user_id
        const { tag_name, following } = req.body
        const following_query = (following === 'unfollowing') ? tagQuery.UNFOLLOWING_TAG : tagQuery.FOLLOWING_TAG
        
        let result = await findTagId(tag_name)
        if(result) {
            const tag_id = result.tag_id
            console.log(`tag_id : ${tag_id}`)
            result = await db.promise().query(following_query, [user_id, tag_id])
            res.status(200).json({'msg' : `${following} ${tag_name}`})
        } else {
            throw 'invalid tag name'
        }
    } catch(e) {
        if(e === 'invalid tag name') {
            res.status(400).json({'msg' : `invalid tag name`})
        }
        console.log(e)
        res.status(400)
    }
}