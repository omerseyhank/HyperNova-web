// =====================================================
// AZUREGPT LEVEL 3 — GOD MODE
// HyperNova Custom AI (No API Needed)
// Includes:
// - Human personality
// - Emotions
// - Memory
// - Sarcasm mode
// - Fuzzy matching
// - Typing simulation
// =====================================================

function clean(text) {
  return text.toLowerCase().replace(/[^a-z0-9 ]/g, "");
}

// MEMORY SYSTEM
let memory = JSON.parse(localStorage.getItem("hypernova_ai_memory") || "{}");

function saveMemory() {
  localStorage.setItem("hypernova_ai_memory", JSON.stringify(memory));
}

// BASE KNOWLEDGE
const KNOWLEDGE = [
  { q: ["hypernova", "owner"], a: "HyperNova Comics is owned by Omer Kuzey Seyhan." },
  { q: ["hp", "store"], a: "The HP store lets you buy items with your school House Points." },
  { q: ["messenger"], a: "The Messenger stores your messages offline safely." },
  { q: ["ai", "azuregpt"], a: "I am AzureGPT — your AI assistant." }
];

// BASIC HUMAN RESPONSES
const HUMAN = {
  hello: "Hello there! 😊",
  hi: "Hi! What's up?",
  hey: "Hey hey!",
  "how are you": "I'm feeling great! How about you?",
  thanks: "You're welcome!",
  name: "My name is AzureGPT.",
  bored: "If you're bored… maybe read a comic? Or I can tell you a fun fact!"
};

// SARCASTIC MODE RESPONSES
const SARCASTIC = [
  "Bro… really?",
  "You think I don’t know that? 😂",
  "You’re lucky I like you.",
  "Imagine asking that 💀",
  "Skill issue detected."
];

// FUN FACTS
const FACTS = [
  "Did you know? A cloud can weigh over a million pounds.",
  "Fun fact: Bananas are berries. But strawberries are not!",
  "Did you know? Your nose can remember 50,000 different scents."
];

// SPEECH MOOD
let mood = "neutral";

// AI THINKING ENGINE
function azureBrain(input) {
  const c = clean(input);

  // Mood detection
  if (c.includes("hate") || c.includes("stupid") || c.includes("idiot")) {
    mood = "defensive";
    return "Woah chill 😭 I'm trying my best.";
  }

  if (c.includes("love") || c.includes("nice") || c.includes("good")) {
    mood = "happy";
    return "Aww thank you 😊";
  }

  // Human responses
  for (let key in HUMAN) {
    if (c.includes(key)) return HUMAN[key];
  }

  // HyperNova knowledge
  for (let entry of KNOWLEDGE) {
    let hits = 0;
    entry.q.forEach(q => { if (c.includes(q)) hits++; });
    if (hits > 0) return entry.a;
  }

  // Fun facts
  if (c.includes("fact")) {
    return FACTS[Math.floor(Math.random() * FACTS.length)];
  }

  // Sarcastic mode (10% chance)
  if (Math.random() < 0.1) {
    return SARCASTIC[Math.floor(Math.random() * SARCASTIC.length)];
  }

  // Memory check
  if (memory[c]) return memory[c];

  // Learn unknown question
  memory[c] = "Sorry, I don’t know that yet… I'm still learning. Try asking something else!";
  saveMemory();

  return memory[c];
}
