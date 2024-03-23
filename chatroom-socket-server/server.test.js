const { createServer } = require("node:http");
const { Server } = require("socket.io");
const ioc = require("socket.io-client");

function waitFor(socket, event) {
  return new Promise((resolve) => {
    socket.once(event, resolve);
  });
}

describe("my awesome project", () => {
  let io, serverSocket, clientSocket;

  beforeAll((done) => {
    const httpServer = createServer();
    io = new Server(httpServer);
    httpServer.listen(() => {
      const port = httpServer.address().port;
      clientSocket = ioc(`http://localhost:${port}`);
      io.on("connection", (socket) => {
        serverSocket = socket;
      });
      clientSocket.on("connect", done);
    });
  });

  afterAll(() => {
    io.close();
    clientSocket.disconnect();
  });

  test("should work", (done) => {
    clientSocket.on("hello", (arg) => {
      expect(arg).toBe("world");
      done();
    });
    serverSocket.emit("hello", "world");
  });

  test("should work with an acknowledgement", (done) => {
    serverSocket.on("hi", (cb) => {
      cb("hola");
    });
    clientSocket.emit("hi", (arg) => {
      expect(arg).toBe("hola");
      done();
    });
  });

  test("should work with emitWithAck()", async () => {
    serverSocket.on("foo", (cb) => {
      cb("bar");
    });
    const result = await clientSocket.emitWithAck("foo");
    expect(result).toBe("bar");
  });

  test("should work with waitFor()", () => {
    clientSocket.emit("baz");

    return waitFor(serverSocket, "baz");
  });
});
/*
const http = require('http');
const ioClient = require('socket.io-client');
const { Server } = require('socket.io');
const EventEmitter = require('events');

const { io, httpServer } = require('./server');
function waitFor(socket, event) {
    return new Promise((resolve) => {
      socket.once(event, resolve);
    });
  }
describe('Socket.io Server', () => {

  let ioServer;
  let socket;
  let ephPort = 8000;
  // Set up a mock HTTP server and a Socket.io server before each test

  it('should handle socket connection', (done) => {
    socket = ioClient(`http://localhost:${ephPort}`, { autoConnect: false });
    socket.auth = { username : "testName" }
    socket.connect(`http://localhost:${ephPort}`, {
        reconnectionDelayMax: 0,
        transports: ['websocket'],
      });

    expect(socket.connected).toBe(false);
    
    httpServer.close()
    socket.close();
    
    done();
  });

  /*
  it('should handle invalid username', (done) => {
    socket = ioClient(`http://localhost:${ephPort}`, { autoConnect: false });
    socket.auth = null
    socket.connect(`http://localhost:${ephPort}`);


    done();
  });
});
*/