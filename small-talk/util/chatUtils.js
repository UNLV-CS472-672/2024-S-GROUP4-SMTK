import handleMessageSave from "@/db/messageSave"

export const sendMessage = (inputMessage, selectedUser, setPrivateMessages, setInputMessage, room, socket) => {
    if (typeof inputMessage === 'string' && inputMessage.trim() !== "" && selectedUser && typeof setPrivateMessages === 'function' && typeof setInputMessage === 'function') {
        console.log("sent message from:" + selectedUser.username + " with message: " + inputMessage);
        socket.emit("private message", { content: inputMessage, to: selectedUser.userID});
        setPrivateMessages(prevMessages => [...prevMessages, { content: inputMessage, from: socket.id }]);
        setInputMessage("");
        handleMessageSave(inputMessage);
    } else {
        console.log("No user selected or empty message");
    }
};