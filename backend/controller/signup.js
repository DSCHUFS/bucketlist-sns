const express = require('express')
const bcrypt = require('bcrypt')
const signupQuery = require('../queries/signup')
const jwt = require('jsonwebtoken');
const secretKey = require('../config/jwt').secretKey

const saltRounds = 10

exports.signupAPI = async(req, res) => {
    const conn = await res.pool.getConnection()
    const insertTags = async (user_id, tags) => {
        for (let i = 0; i < tags.length; i++) {
            let result = await conn.query(signupQuery.FIND_TAG_NAME, [tags[i]])
            if(result[0].length === 0) { // Tags table에 존재하지 않으면 insert
                await conn.query(signupQuery.TAG_INSERT, [tags[i]])
            } else {
                await conn.query(signupQuery.FOLLOWING_TAG, [user_id, tags[i]])
            }
        }
    }
    try {
        const { email, password, name, birth, death, profile_image, profile_detail, tag} = req.body
        console.log(`${email} post signup`)

        // email 중복 체크
        const check_email = await conn.query(signupQuery.EMAIL_CHECK, [email])
        if(check_email[0].length > 0) {
            console.log(`duplicate email`)
            res.status(400).json({'msg' : `duplicate email`})
        } else {
            const hash_pw = bcrypt.hashSync(password, saltRounds)
            await conn.beginTransaction()
            const insert_user = await conn.query(signupQuery.USER_INSERT, [email, hash_pw, name, birth, death, profile_image, profile_detail])
            const user_id = insert_user[0].insertId
            
            const tags = tag.split('/') // 여러 tag가 /로 구분되어 하나의 string으로 전달된다고 가정
            await insertTags(user_id, tags) // 새로운 tag 삽입, following table에도 추가
            let token = jwt.sign({ id: user_id }, secretKey, { expiresIn: '7d'}); // jwt 발급
            console.log(`${email} signup success`)
            res.status(200).json({'msg' : `signup success`, 'token' : token})
            await conn.commit()
        }
    } catch(e) {
        await conn.rollback()
        console.log(`signup e : ${e}`)
        res.status(400)
    } finally {
        await conn.release()
    }
}