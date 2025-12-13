<script>
const WORKER_URL = "https://azure-gptworker.omerkuzeyseyhan5.workers.dev";

async function send(){
  const input = document.getElementById("msg");
  const log = document.getElementById("log");
  const text = input.value.trim();
  if (!text) return;

  log.innerHTML += `<div class="msg user">${text}</div>`;
  input.value = "";
  log.scrollTop = log.scrollHeight;

  try {
    const res = await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });

    const raw = await res.text();
    console.log("RAW RESPONSE:", raw);

    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      log.innerHTML += `<div class="msg ai">❌ Worker did not return JSON</div>`;
      return;
    }

    log.innerHTML += `<div class="msg ai">${data.reply || "❌ No reply field"}</div>`;
    log.scrollTop = log.scrollHeight;

  } catch (err) {
    log.innerHTML += `<div class="msg ai">⚠️ Connection error</div>`;
  }
}
</script>
