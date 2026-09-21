
function story() {
  let t = document.getElementById("topic").value || "a brave rabbit and a lion";

  document.getElementById("story").textContent =
    `Once upon a time, ${t}.

They faced a difficult problem, but they stayed calm and worked together. Their clever idea helped them find a solution.

They learned that courage, kindness and teamwork can make a big difference.

The End!`;
}

function count() {
  let t = document.getElementById("counter").value;

  document.getElementById("words").textContent =
    t.trim() ? t.trim().split(/\s+/).length : 0;

  document.getElementById("chars").textContent = t.length;
}
function generateCaption() {
  const topic = document.getElementById("captionTopic").value.trim();
  const output = document.getElementById("caps");

  if (!topic) {
    output.textContent = "Please enter a topic first.";
    return;
  }

  const captions = [
    `✨ Making memories with ${topic}.`,
    `🚀 Life is better when you enjoy ${topic}.`,
    `💫 Keep creating, keep enjoying ${topic}.`,
    `🔥 ${topic} — just the vibe I needed!`,
    `🌟 Enjoy the moment and make it count with ${topic}.`
  ];

  output.textContent = captions.join("\n");
}

function copy(id) {
  navigator.clipboard.writeText(
    document.getElementById(id).textContent
  );

  alert("Copied!");
}

function upper() {
  document.getElementById("caseText").value =
    document.getElementById("caseText").value.toUpperCase();
}

function lower() {
  document.getElementById("caseText").value =
    document.getElementById("caseText").value.toLowerCase();
}

function title() {
  let e = document.getElementById("caseText");

  e.value = e.value
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase());
}

function toggleTheme() {
  document.body.classList.toggle("dark");

  localStorage.theme =
    document.body.classList.contains("dark")
      ? "dark"
      : "light";
}

if (localStorage.theme === "dark") {
  document.body.classList.add("dark");
    }
function generateQR() {
  const text = document.getElementById("qrText").value.trim();
  const qrBox = document.getElementById("qrcode");

  qrBox.innerHTML = "";

  if (!text) {
    qrBox.innerHTML = "Please enter text or a link.";
    return;
  }

  new QRCode(qrBox, {
    text: text,
    width: 180,
    height: 180
  });
}
function downloadQR() {
  const qrImage = document.querySelector("#qrcode img");

  if (!qrImage) {
    alert("Please generate a QR code first.");
    return;
  }

  const link = document.createElement("a");
  link.href = qrImage.src;
  link.download = "zeeshan-tools-qr.png";
  link.click();
}
