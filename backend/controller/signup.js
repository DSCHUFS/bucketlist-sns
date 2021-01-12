const express = require('express')
const bcrypt = require('bcrypt')
const db = require('../config/database')
const signupQuery = require('../queries/signup')

const saltRounds = 10

const insertTags = async (user_id, tags) => {
    for (let i = 0; i < tags.length; i++) {
        let result = await db.promise().query(signupQuery.FIND_TAG_NAME, [tags[i]])
        if(result[0].length === 0) { // Tags table에 존재하지 않으면 insert
            await db.promise().query(signupQuery.TAG_INSERT, [tags[i]])
        }
        await db.promise().query(signupQuery.FOLLOWING_TAG, [user_id, tags[i]])
    }
}

exports.signupAPI = async(req, res) => {
    try {
        const { email, password, name, birth, death, profile_image, profile_detail, tag} = req.body

        // email 중복 체크
        const check_email = await db.promise().query(signupQuery.EMAIL_CHECK, [email])
        if(check_email[0].length > 0) {
            res.status(400).json({'msg' : `duplicate email`})
        }

        const hash_pw = bcrypt.hashSync(password, saltRounds)
        const insert_user = await db.promise().query(signupQuery.USER_INSERT, [email, hash_pw, name, birth, death, profile_image, profile_detail])
        const user_id = insert_user[0].insertId
        
        const tags = tag.split('/') // 여러 tag가 /로 구분되어 하나의 string으로 전달된다고 가정
        await insertTags(user_id, tags) // 새로운 tag 삽입, following table에도 추가

        res.status(200).json({'msg' : `signup success`})
    } catch(e) {
        console.log(e)
        res.status(400)
    }
}