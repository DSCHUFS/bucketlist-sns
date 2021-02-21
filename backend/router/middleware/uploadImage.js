const multer = require('multer')
const upload = require('../../fileupload')

const uploadImage = (req, res, next) =>{
    upload(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            res.profile_image = 'err'
            console.log('multer err')
            return next(err);
        } else if (err) {
            res.profile_image = 'err'
            console.log('multer err')
            return next(err);
        }
        if(req.file === undefined) { // profile 사진이 변경되지 않았을 때
            res.profile_image = ''
            return next()
        }
        // console.log('원본파일명 : ' + req.file.originalname)
        console.log('저장파일명 : ' + req.file.filename)
        // console.log('크기 : ' + req.profile_image.size)
        res.profile_image = req.file.filename
        return next()
    })
}

exports.uploadImage = uploadImage