const express = require("express");
const cors = require("cors");
const signupRouter = require("./router/signup");
const signinRouter = require("./router/signin");
const tagRouter = require("./router/tag");
const bucketRouter = require("./router/bucketCRUD");
const searchRouter = require("./router/search");
const buttonRouter = require("./router/button");
const userRouter = require('./router/user')
const pool = require("./config/dbPool");
const app = express();

app.use(express.json());
app.use(cors());
app.use(pool);
app.use(express.static('public'));

app.use("/signup", signupRouter);
app.use("/signin", signinRouter);
app.use("/tag", tagRouter);
app.use("/search", searchRouter);
app.use("/bucket", bucketRouter);
app.use("/like", buttonRouter);
app.use('/user', userRouter);

app.use("/", function (req, res) {
  res.statusCode = 200; //send the appropriate status code
  res.json({ status: "success", message: "hello", data: {} });
});

app.listen(3001, () => {
  console.log("App is running on port 3001");
});
