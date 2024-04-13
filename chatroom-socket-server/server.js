const port = 8000;
const httpServer = require("http").createServer((req, res) => {}).listen(port);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
    // the user connected is undefined because the cookie is not set up
    console.log("A user connected: " + socket.handshake.auth.username);
    
    // Your existing user authentication logic here...
    const username = socket.handshake.auth.username;
    if (!username) {
        socket.emit("error", "Invalid username");
        socket.disconnect();
        return;
    }
    socket.username = username;

    // Notify existing users about the new connection
    io.emit("user connected", {
        userID: socket.id,
        username: socket.username,
    });

    // Send the list of users to the newly connected client
    const users = [];
    for (let [id, socket] of io.of("/").sockets) {
        users.push({
            userID: id,
            username: socket.username
        });
    }
    socket.emit("users", users);

    // Listen for private messages
    socket.on("private message", ({ content, to }) => {
      socket.to(to).emit("private message", {
        content,
        from: socket.id,
      });
      console.log("Private message from: " + socket.handshake.auth.username + " content: " + content + " to:  " + to);
    });

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("User disconnected: " + socket.username);
        io.emit("user disconnected", {
            userID: socket.id,
            username: socket.username,
        });
    });
});

module.exports = { io, httpServer };