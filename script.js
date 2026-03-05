// Blessings Button Action
function showBlessing() {
  alert("💖 Aryan & Kajal ko tilak ki dher saari shubhkamnayein!");
}

// Diya Glow Flicker
function flickerDiya() {
  const diya = document.querySelector('.diya');
  setInterval(() => {
    const intensity = Math.random() * 20 + 10;
    diya.style.filter = `drop-shadow(0 0 ${intensity}px #ff9933)`;
  }, 300);
}

// Mango Leaves Gentle Sway
function animateLeaves() {
  const leaves = document.querySelectorAll('.leaf');
  leaves.forEach((leaf, i) => {
    let angle = 0;
    setInterval(() => {
      angle = Math.sin(Date.now() / 1000 + i) * 5;
      leaf.style.transform = `rotate(${angle}deg)`;
    }, 50);
  });
}

// QR Sparkle Hover Effect
function qrSparkle() {
  const qr = document.querySelector('.qr');
  qr.addEventListener('mouseover', () => {
    qr.style.boxShadow = "0 0 25px #ffcc66";
  });
  qr.addEventListener('mouseout', () => {
    qr.style.boxShadow = "0 0 10px #ff9933";
  });
}

// Dynamic QR Code Generator
function generateQR() {
  new QRCode(document.getElementById("qrcode"), {
    text: "https://maps.google.com/?q=P.S+Palace+Barra+8+Kanpur",
    width: 150,
    height: 150,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
}

// Run All Animations
window.onload = () => {
  flickerDiya();
  animateLeaves();
  qrSparkle();
  generateQR();
};