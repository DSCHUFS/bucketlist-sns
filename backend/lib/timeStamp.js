const moment = require('moment')

exports.datetime = function(){
    return moment().format('YYYY-MM-DD HH:mm:ss')
} 

exports.datetimeTight = function(){
    return moment().format('YYYYMMDDHHmmss')
} 

exports.date = function() {
    return moment().format('YYYY-MM-DD')
}