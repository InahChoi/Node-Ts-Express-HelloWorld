import * as express from "express";

const app: express.Application = express();

app.get("/", (req: express.Request, res:express.Response, next: express.NextFunction) => {
    res.send("HelloWorld!");
}
);

app.listen(3000, () => {
    console.log("🕹 Server go go! 🚀");
});
