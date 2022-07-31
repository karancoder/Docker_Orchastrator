const express = require("express");
const app = express();
const port = 8080;
const containersRouter = require("./containers/route");
const cors = require("cors");

app.use(
    cors({
        origin: "*",
    })
);
app.use("/containers", containersRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
