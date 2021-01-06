const express = require('express')
const bcrypt = require('bcrypt')
const db = require('../config/database')
const signupQuery = require('../queries/signup')

const saltRounds = 10

const findAndInsertTag = async (tag_name) => { // bucket에서 tag 등록시에도 사용할 수 있을 듯
    let select_tag_id = await db.promise().query(signupQuery.FIND_TAG_ID, [tag_name]) // tag 검색
    let tag_id = 0
    if(select_tag_id[0][0]) { // 이미 존재하는 태그(해당 태그의 tag_id return)
        tag_id = select_tag_id[0][0].tag_id
    } else { // 존재하지 않는 태그(새로운 태그 등록 후 tag_id return)
        let insert_tag_id = await db.promise().query(signupQuery.INSERT_TAG, [tag_name])
        tag_id = insert_tag_id[0].insertId
    }
    return tag_id
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

        const tags = tag.split('/')
        console.log(`tags : ${tags}`)
        for (let i = 0; i < tags.length; i++) {
            const tag_id = await findAndInsertTag(tags[i])
            console.log(`tag_id : ${tag_id}`)
            await db.promise().query(signupQuery.FOLLOWING_TAG, [user_id, tag_id])
        }

        res.status(200).json({'msg' : `signup success`})
    } catch(e) {
        console.log(e)
        res.status(400)
    }
}