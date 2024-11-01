function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatMessages = document.getElementById("chat-messages");

    // Get user input
    const messageText = userInput.value.trim();

    // Check if the input is not empty
    if (messageText) {
        // Create a new message element
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", "user-message"); // Added class for user message
        messageElement.textContent = messageText;

        // Append the message to the chat area
        chatMessages.appendChild(messageElement);

        // Clear the input
        userInput.value = "";

        // Scroll to the bottom of the chat area
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulate a bot response after a delay
        setTimeout(() => {
            const botMessage = document.createElement("div");
            botMessage.classList.add("message", "bot-message"); // Added class for bot message
            botMessage.textContent = "Bot: You said: " + messageText;
            chatMessages.appendChild(botMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight; // Keep scrolled to bottom
        }, 1000);
    }
}

// Add event listener for enter key to send message
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
        event.preventDefault(); // Prevent form submission or other default actions
    }
});
