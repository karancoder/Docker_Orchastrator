const express = require("express");
const router = express.Router();
const { listAllContainers, runContainer } = require("./controller");

router.use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
});

router.get("/", async (req, res) => {
    containers = await listAllContainers();
    res.send(containers);
});

router.post("/:id/run", async (req, res) => {
    container = await runContainer(req.params.id);
    res.send("Started container");
});

module.exports = router;
