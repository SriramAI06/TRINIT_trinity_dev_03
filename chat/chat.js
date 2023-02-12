const inputField = document.querySelector('.chat-input-field');
const submitButton = document.querySelector('.chat-submit');
const messagesContainer = document.querySelector('.chat-messages');

submitButton.addEventListener('click', function() {
  const inputValue = inputField.value;
  if (!inputValue) {
    return;
  }

  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message');

  const usernameElement = document.createElement('span');
  usernameElement.classList.add('chat-message-username');
  usernameElement.textContent = 'You:';

  const messageTextElement = document.createElement('span');
  messageTextElement.classList.add('chat-message-text');
  messageTextElement.textContent = inputValue;

  messageElement.appendChild(usernameElement);
  messageElement.appendChild(messageTextElement);

  messagesContainer.appendChild(messageElement);

  inputField.value = '';
});
