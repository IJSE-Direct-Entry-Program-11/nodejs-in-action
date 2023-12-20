import * as http from "http";

const server = http.createServer();

server.on('request', (req, res) => {
    console.log("Incoming connection");
    res.setHeader("Content-Type", "text/html");
    for(let i = 0; i < 100000; i++){
        console.log(i);
    }
    res.write('<h1>Hello Node JS!</h1>');
    res.end();
});

server.listen(5050, () => {
    console.log("Web server is listening at 5050");
});