// 🔵 AzureGPT API URL (your Worker URL)
const API_URL = "https://withered-frost-9713.omerkuzeyseyhan5.workers.dev";

// =========================
// MESSENGER SYSTEM
// =========================

async function sendMessage() {
  const input = document.getElementById("messageInput");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chatBox");

  // Show user message
  chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;
  input.value = "";

  // Send to AzureGPT Worker
  try {
    const response = await fetch(`${API_URL}?q=` + encodeURIComponent(message));
    const text = await response.text();

    // Show AI reply
    chatBox.innerHTML += `<p><b>AzureGPT:</b> ${text}</p>`;
  } catch (e) {
    chatBox.innerHTML += `<p><b>AzureGPT:</b> ERROR — cannot connect.</p>`;
  }
}


// =========================
// COMIC READER SYSTEM
// =========================

let currentPage = 1;
const maxPage = 5;

function nextPage() {
  if (currentPage < maxPage) currentPage++;
  document.getElementById("comicPage").src = `comics/amongus/page${currentPage}.jpg`;
}

function prevPage() {
  if (currentPage > 1) currentPage--;
  document.getElementById("comicPage").src = `comics/amongus/page${currentPage}.jpg`;
}

// =========================
// FREE COMIC DEAL RANDOM EVENT
// =========================

setInterval(() => {
  if (Math.random() < 0.015) {
    alert("Free Comic Deal: Would you like to give a random user a free comic?");
  }
}, 4000);
