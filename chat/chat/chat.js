const chatContainer = document.getElementById("chat-container");
const chatMessages = document.getElementById("chat-messages");
const chatInputField = document.getElementById("chat-input-field");
const chatSubmit = document.getElementById("chat-submit");

chatSubmit.addEventListener("click", function() {
  const message = chatInputField.value;
  if (!message) {
    return;
  }
  chatMessages.innerHTML += `<p>You: ${message}</p>`;
  chatInputField.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;
});
