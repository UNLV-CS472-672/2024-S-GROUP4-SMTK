const port = 8000;
const httpServer = require("http").createServer((req, res) => {}).listen(port);
console.log(httpServer.address().port);
console.log(httpServer.address().address);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

// when socket.connect on react gets called, this runs
io.use((socket, next) => {
    console.log("connected")
    const username = socket.handshake.auth.username
    if (!username) {
        return next(new Error("invalid"))
    }
    socket.username = username;
    console.log("connect is called and received by server")
    next();
}) 

// io.of("/").sockets
// map of all CURRENTLY CONNECTED SOCKET INSTANCES INDEXED BY ID
io.on("connection", (socket) => {
    const users = [];
    for (let [id, socket] of io.of("/").sockets) {
        users.push({
            userID: id,
            username: socket.username
        });
    }
    socket.emit("users", users);
})


io.on("connection", (socket) => {
    // notify existing users
    socket.broadcast.emit("user connected", {
      userID: socket.id,
      username: socket.username,
    });
});