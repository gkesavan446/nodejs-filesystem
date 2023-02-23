import express from "express";
import fs from "fs";

const router = express.Router()
let lastFileName;
router.post("/create", function (request, response) {
    const data = request.body;
    console.log(data);
    const date = new Date(Date.now());
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    const formattedTime = `${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
    // console.log("formattedDate", formattedDate);
    const content = date.toString();
    lastFileName = `${formattedDate} ${formattedTime}`;

    fs.writeFile(`./files/${lastFileName}.txt`, content, (err, data) => {
        if (!err) {
            // console.log("create file task completed !");
            response.send({ message: "file with current Date Time created" });
        } else {
            response.status(500).send({ message: "Error file not created" });
        }

    })
})


router.get("/read", function (request, response) {

    // console.log("lastFileName is", lastFileName);
    fs.readFile(`./files/${lastFileName}.txt`, "utf-8", (err, data) => {
        // console.log("data is", data, "error is", err)
        if (err) {
            console.log("error", data)
            response.status(500).send({ message: " Error file not readed" });
        } else {
            // console.log("read task completed !");
            response.send({ message: `${data}` });
        }

    })
})




export default router;