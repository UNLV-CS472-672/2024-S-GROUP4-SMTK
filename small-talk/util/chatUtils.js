import handleMessageSave from "@/db/messageSave"
import censor from "@/components/censorMess";

export const sendMessage = (inputMessage, selectedUser, setPrivateMessages, setInputMessage, room, socket) => {
    if (typeof inputMessage === 'string' && inputMessage.trim() !== "" && selectedUser && typeof setPrivateMessages === 'function' && typeof setInputMessage === 'function') {
        const censorMessage = censor(inputMessage);
        
        console.log("sent message from:" + selectedUser.username + " with message: " + censorMessage);
        socket.emit("private message", { content: censorMessage, to: selectedUser.userID});
        setPrivateMessages(prevMessages => [...prevMessages, { content: censorMessage, from: socket.id }]);
        setInputMessage("");
        handleMessageSave(censorMessage);
    } else {
        console.log("No user selected or empty message");
    }
};