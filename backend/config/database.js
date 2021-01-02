const mysql = require('mysql2')

module.exports = mysql.createConnection({
    host: '13.124.208.47',
    user: 'root',
    password: 'svtcarat0526',
    database: 'bucket_project'
})