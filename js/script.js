// 🌧️ Chuva animada no canvas
const canvas = document.getElementById("rain-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drops = Array.from({ length: 200 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  length: Math.random() * 20 + 10,
  speed: Math.random() * 2 + 2,
}));

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let drop of drops) {
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
  }
  ctx.stroke();
}

function updateRain() {
  for (let drop of drops) {
    drop.y += drop.speed;
    if (drop.y > canvas.height) {
      drop.y = -drop.length;
      drop.x = Math.random() * canvas.width;
    }
  }
}

function animateRain() {
  drawRain();
  updateRain();
  requestAnimationFrame(animateRain);
}
animateRain();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// 🌫️ Efeito fade-in ao rolar
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

faders.forEach(el => observer.observe(el));

// ⌨️ Frases digitadas
const frasesDigitadas = [
  "Às vezes, estar em silêncio é o único jeito de gritar.",
  "O vazio grita mais alto que mil vozes.",
  "Ser forte é não desistir, mesmo quando não se quer continuar.",
  "A alma cansa antes do corpo.",
  "O tempo não cura tudo, só ensina a conviver com a dor.",
  "Às vezes, ser forte é só continuar respirando.",
  "Nem todo mundo que sorri está vivo por dentro.",
  "A alma grita o que a boca cala.",
  "A esperança dói mais quando ela não morre.",
  "Liberdade é poder sentir tudo, até o que machuca."
];

let textoIndex = 0;
let letraIndex = 0;
let typingTimeout;

function digitarFrase() {
  const textoEl = document.getElementById("texto-digitando");
  if (!textoEl) return;

  const frase = frasesDigitadas[textoIndex];

  if (letraIndex === 0) textoEl.textContent = "";

  if (letraIndex < frase.length) {
    textoEl.textContent += frase.charAt(letraIndex);
    letraIndex++;
    typingTimeout = setTimeout(digitarFrase, 80);
  } else {
    setTimeout(() => {
      letraIndex = 0;
      textoIndex = (textoIndex + 1) % frasesDigitadas.length;
      digitarFrase();
    }, 4000);
  }
}
digitarFrase();

// 🌌 Transição com Zoom-out ao mudar de página
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    if (!href || href === '#' || href.startsWith('#')) return;

    e.preventDefault();
    document.body.classList.add('zoom-out');

    setTimeout(() => {
      window.location.href = href;
    }, 500);
  });
});

