async function sendMessage() {
  const input = document.getElementById("messageInput");
  const chat = document.getElementById("chat");

  const userText = input.value.trim();
  if (!userText) return;

  chat.innerHTML += `<p><b>You:</b> ${userText}</p>`;
  input.value = "";

  const response = await fetch(
    "https://azure-gptworker.omerkuzeyseyhan5.workers.dev",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userText })
    }
  );

  const data = await response.json();

  chat.innerHTML += `<p><b>AzureGPT:</b> ${data.reply}</p>`;
}
