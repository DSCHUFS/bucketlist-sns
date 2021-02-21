const multer = require('multer')
const moment = require('./lib/timeStamp')
const fs = require('fs')

const makeDir = async(dir) => {
    if(!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }
}

const storage = multer.diskStorage({
    destination: async function(req, file, cb) {
        await makeDir('public/upload/'+ moment.date())
        cb(null, 'public/upload/'+ moment.date()) // file save path(backend/upload)
    },
    filename: function(req, file, cb) {
        console.log(file.originalname)
        cb(null, moment.datetimeTight() + '_' + file.originalname) // 저장되는 file명
    }
})

const upload = multer({ storage: storage }).single("file") // single : 하나의 file 업로드

module.exports = upload