import { createServer } from "node:http";

const server = createServer((req, res) => {

    console.log(req.method);
    res.end("Hello World");
});

server.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
  });