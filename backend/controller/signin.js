const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const db = require('../config/database')
const signinQuery = require('../queries/signin')
const secretKey = require('../config/jwt').secretKey

exports.signinAPI = async(req, res) => {
    try {
        const { email, password } = req.body

        // user pw 가져오기
        let result = await db.promise().query(signinQuery.GET_USER_PASSWORD, [email])
        result = result[0][0]

        if(result === undefined) {
            res.status(400).json({'msg' : `incorrect email`})
        }
        
        const user_id = result['user_id']
        const user_pw = result['user_password']

        // db의 pw와 입력받은 pw가 동일한지 비교
        bcrypt.compare(password, user_pw, function(err, result) {
            if(result) {
                let token = jwt.sign({ id: user_id }, secretKey, { expiresIn: '1d'}); // jwt 발급
                res.status(200).json({'msg' : `signin success`, 'token' : token})
                
            } else {
                res.status(400).json({'msg' : `incorrect password`})
            }
        });
    } catch(e) {
        console.log(e)
        res.status(400)
    }
}