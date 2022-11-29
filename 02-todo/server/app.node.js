const http = require("http");

const server = http.createServer((req, res) => {
    const statusCode = 425;
    res.writeHead(statusCode);
    res.end("Du gjorde ett ${req.metod}-anrop till ${req.url}");

});

server.listen("5000",() => console.log("Server running on http://localhost:5000"));