import filesRouter from "./routes/files.route.js"
import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json())

app.get("/", function (request, response) {
    response.send(`<p>Welcome to the Files API Task  </p>
     <p>use files/create to create a new file</p>
     <p>use files/read to create read the last created file</p>`
    )
})

app.use("/files", filesRouter)

app.listen(PORT, () => console.log("app started in", PORT));
