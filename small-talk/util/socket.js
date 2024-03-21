import { io } from "socket.io-client";

// Connect to the server
const URL = "http://localhost:8000";
// set to false for now, can be set to true for auto connect later
const socket = io(URL, { autoConnect: false });

// catching all the listeners
socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;
