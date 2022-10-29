import cors from "cors";
import express from "express";

const app = express();

app.use(cors());

app.get("/:input", (req, res) => {
    if (Number(req.params.input) % 3 === 0) {
        res.send("Fizz");
    } else {
        res.status(406).send();
    }
});

app.listen(16000, () => console.log("Fizz listening on port 16000"));

