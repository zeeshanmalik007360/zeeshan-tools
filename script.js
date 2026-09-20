function makeStory() {
  const topic =
    document.getElementById("topic").value.trim() ||
    "a brave rabbit and a lion";

  const story =
    `Once upon a time, ${topic}.\n\n` +
    `They faced a small problem in the forest, but instead of giving up, ` +
    `they worked together. After trying a few ideas, they found a clever solution.\n\n` +
    `Everyone learned an important lesson: courage and kindness can make a big difference.\n\n` +
    `The End!`;

  document.getElementById("story").textContent = story;
}

function countWords() {
  const text = document.getElementById("counter").value;

  const words = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  document.getElementById("words").textContent = words;
  document.getElementById("chars").textContent = text.length;
}

function captions() {
  document.getElementById("captions").textContent =
    "✨ Making ideas happen.\n" +
    "🚀 Learn. Create. Grow.\n" +
    "💡 Small steps, big dreams.\n" +
    "🔥 Create something awesome today!";
}
