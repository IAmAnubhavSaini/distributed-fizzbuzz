import cors from "cors";
import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 16000;

const apiserver = express();

apiserver.use(cors());
apiserver.use(helmet());

if (process.env.NODE_ENV !== "production") {
    console.log({processEnv: process.env});
}

apiserver.all("*", (req, res, next) => {
    if (process.env.NODE_ENV !== "production") {
        const {query, params, body, path, baseUrl, headers} = req;
        console.log({query, params, body, path, baseUrl, headers});
    }
    next();
});

apiserver.get("/:input", (req, res) => {
    if (Number(req.params.input) % 3 === 0) {
        res.send("Fizz");
    } else {
        res.status(406).send();
    }
});

function handleExit() {
    function handleSignal(signal) {
        console.log("\nEND", `Received ${signal.toString()}.`);

        (function exitProcess() {
            console.log("\nEND", 'Exiting process.', process);
            process.exit(parseInt(signal.toString()));
        })();
    }

    process.on('SIGINT', handleSignal);
    process.on('SIGTERM', handleSignal);
}

/* start server */
apiserver.listen(PORT, () => console.log(`Fizz listening on port ${PORT}`));

/* manage graceful exit */
handleExit();
