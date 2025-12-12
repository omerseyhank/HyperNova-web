// SOUND EFFECTS
const clickSound = new Audio("bubble.mp3");
const typeSound = new Audio("type.mp3");

function playClick() { clickSound.cloneNode(true).play(); }
function playType() { typeSound.cloneNode(true).play(); }

// CHAT APPEND
async function sendToAI() {
  const input = document.getElementById("aiInput");
  const box = document.getElementById("aiChat");

  let text = input.value.trim();
  if (!text) return;

  // Play click sound
  playClick();

  // User bubble
  box.innerHTML += `
    <div class="bubble user">${text}</div>
  `;

  input.value = "";
  box.scrollTop = box.scrollHeight;

  // AI typing effect
  box.innerHTML += `<div id="typing" class="bubble ai typing">AzureGPT is typing...</div>`;
  box.scrollTop = box.scrollHeight;

  await new Promise(r => setTimeout(r, 800 + Math.random() * 600));
  playType();

  // AI answer
  const answer = azureBrain(text);

  document.getElementById("typing").remove();

  box.innerHTML += `
    <div class="bubble ai">${answer}</div>
  `;

  box.scrollTop = box.scrollHeight;
}
