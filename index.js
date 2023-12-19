const express = require("express");

const { connectMongoDb } = require("./connection");
const userRouter = require("./routes/user");
const logReqRes = require('./midlewares')


// const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//Connection
connectMongoDb("mongodb://127.0.0.1:27017/my-app-1")

//Midlewares
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"))
// app.use((req, res, next) => {
  
// });

// Routes
app.use('/api/users', userRouter);

app.listen(PORT, () => console.log(`Server is started at port : ${PORT}`));
