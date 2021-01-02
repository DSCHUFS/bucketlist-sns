const express = require('express')
const signupRouter = require('./router/signup')
const signinRouter = require('./router/signin')

const app = express()
app.use(express.json())

app.use('/signup', signupRouter)
app.use('/signin', signinRouter)


app.listen(3000, () => {
    console.log('App is running on port 3000')
})