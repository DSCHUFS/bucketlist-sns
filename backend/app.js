const express = require("express");
const signupRouter = require("./router/signup");
const signinRouter = require("./router/signin");
const bucketRouter = require("./router/bucketCRUD");

const app = express();
app.use(express.json());

app.use("/signup", signupRouter);
app.use("/signin", signinRouter);

app.use("/bucket", bucketRouter);

app.use("/", function (req, res) {
  res.statusCode = 200; //send the appropriate status code
  res.json({ status: "success", message: "hello", data: {} });
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
