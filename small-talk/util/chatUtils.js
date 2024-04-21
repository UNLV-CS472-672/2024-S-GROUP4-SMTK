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

/**
 * Currently only logs the user that the chat room is being set up with.
 * In the future will need to implement socket connections and chat room setup.
 */
export const setupChatRoom = (username) => {
    if (typeof username === 'string') {
        console.log("Setting up chat room with: " + username);
    } else {
        console.log("Invalid username");
    }
};
