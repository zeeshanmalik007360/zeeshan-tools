
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
function captions() {
  let x = {
    general: [
      "✨ Making ideas happen.",
      "🚀 Create. Learn. Grow.",
      "💡 Small steps, big dreams."
    ],

    motivation: [
      "💪 Keep going.",
      "🚀 Your future starts today.",
      "🔥 Progress over perfection."
    ],

    study: [
      "📚 Study mode: ON.",
      "🎯 Focus on the goal.",
      "✍️ Learn today, shine tomorrow."
    ],

    travel: [
      "🌍 Collect moments.",
      "✈️ New place, new memories.",
      "🌅 Adventure is calling."
    ]

  };

  document.getElementById("caps").textContent =
    x[document.getElementById("type").value].join("\n");
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
