const express = require('express')
const moment = require('./timeStamp')
const buttonQuery = require('../queries/button')

exports.likeAPI = async(req, res) => {
    try {
        const user_id = res.user_id
        const { bucket_id, button } = req.body // button : like / unlike
        const like = (button === 'like')? true : false // true : like, false : unlike
        const button_push_at = moment.date()
        const button_type = 1 // 좋아요 버튼(일단 버튼 1개만 사용)
        
        const query = (like)? buttonQuery.INSERT_PUSH_BUTTON : buttonQuery.DELETE_PUSH_BUTTON
        await res.pool.query(query, [user_id, button_type, button_push_at, bucket_id])
        res.status(200).json({'msg' : `${button} bucket`})
    } catch(e) {
        console.log(e)
        res.status(400)
    }
}
