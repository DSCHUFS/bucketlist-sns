const multer = require('multer')
const upload = require('../../fileupload')

const uploadImage = (req, res, next) =>{
    upload(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            res.profile_image = 'err'
            return next(err);
        } else if (err) {
            res.profile_image = 'err'
            return next(err);
        }
        // console.log('원본파일명 : ' + req.file.originalname)
        console.log('저장파일명 : ' + req.file.filename)
        // console.log('크기 : ' + req.file.size)
        res.profile_image = req.file.filename
        return next()
    })
}

exports.uploadImage = uploadImage