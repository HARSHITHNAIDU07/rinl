document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('message-form');
  const input = document.getElementById('user-message');
  const messages = document.getElementById('chat-messages');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const messageText = input.value.trim();
    if (messageText === '') return;

    appendUserMessage(messageText);
    simulateBotResponse(messageText);

    input.value = '';
    messages.scrollTop = messages.scrollHeight;
  });

  function appendUserMessage(messageText) {
    const userMessageElement = document.createElement('div');
    userMessageElement.className = 'user-message';
    userMessageElement.textContent = messageText;
    messages.appendChild(userMessageElement);
  }

  function appendBotMessage(messageText) {
    const botMessageElement = document.createElement('div');
    botMessageElement.className = 'bot-message';
    botMessageElement.textContent = messageText;
    messages.appendChild(botMessageElement);
  }

  function simulateBotResponse(messageText) {
    setTimeout(function() {
      const response = generateBotResponse(messageText);
      appendBotMessage(response);
      messages.scrollTop = messages.scrollHeight;
    }, 500);
  }

  function generateBotResponse(userMessage) {
    // This is where you can implement your chatbot logic to generate a response.
    // For simplicity, I'll just return a generic response.
    return "Thank you for your message!";
  }
});
