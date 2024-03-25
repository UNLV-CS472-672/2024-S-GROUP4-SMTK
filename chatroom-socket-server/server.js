const port = 8000;
const httpServer = require("http").createServer((req, res) => {}).listen(port);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

// when socket.connect on react gets called, this runs
io.use((socket, next) => {
    console.log("connected " + socket.handshake.auth.username)
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

// creating an event listener for private message on socket connection
// get the message (content) and send that (to) recipient's ID 
io.on("private message", ({ content, to }) => {
  console.log("private send " + socket.handshake.auth.username)
  socket.to(to).emit("private message", {
    content,
    from: socket.id,
  });
});

module.exports = [ io, httpServer ];