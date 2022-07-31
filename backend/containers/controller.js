var Docker = require("dockerode");
var docker = new Docker({ socketPath: "/var/run/docker.sock" });

async function listAllContainers() {
    let containers = await docker.listContainers({ all: true });
    return containers;
}

async function runContainer(imageName) {
    await docker.pull(imageName);
    console.log("pulled image: " + imageName);
    docker.run(
        imageName,
        (startOptions = { detachKeys: "d" }),
        (callback = {
            function(err, data, container) {
                console.log(data.StatusCode);
            },
        })
    );
}

module.exports = { listAllContainers, runContainer };
