import filesRouter from "./routes/files.route.js"
import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json())

app.get("/", function (request, response) {
    response.send(`<h1>Hello ๐โโ๏ธ, Welcome to our nodejs-filesystem ๐ ๐ </h1>
     <h4>With files/create you can create a new file๐</h4>
     <h4>With files/read you can read the file which is last created๐</h4>`
    )
})

app.use("/files", filesRouter)

app.listen(PORT, () => console.log("app started in", PORT));
