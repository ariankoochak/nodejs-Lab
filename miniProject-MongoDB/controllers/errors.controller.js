function wrongUrlHandler(res) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "api not found!" }));
    res.end();
}

const errorsHandler = {
    wrongUrlHandler,
}

module.exports = errorsHandler;