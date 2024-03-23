const app = require('./app');

app.listen(8000, ()=>{
    console.log("Server listening on port 8000");
})

const io = require("socket.io")(serverm, {
    cors: {
        origin: true,
        methods: ['GET', 'POST'],
        credentials: true
    }
});

io.on("connection", )