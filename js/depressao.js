console.log("Página depressão carregada.");

function initTransition() {
  const video = document.getElementById('intro-video');
  const content = document.getElementById('main-content');
  const overlay = document.getElementById('background-overlay');
  const backButton = document.createElement('a');
  backButton.href = "../index.html";
  backButton.classList.add('btn-voltar');
  backButton.textContent = "Voltar para o Início";

  // Adiciona o botão de voltar à página
  document.body.appendChild(backButton);

  // Evento para aplicar efeito de Zoom Out antes de voltar ao índice
  backButton.addEventListener('click', (e) => {
    e.preventDefault(); // Previne o redirecionamento imediato
    content.classList.add('zoom-out'); // Aplica o efeito de zoom-out

    // Espera o tempo da animação de zoom-out para redirecionar
    setTimeout(() => {
      window.location.href = backButton.href; // Redireciona após a animação
    }, 600); // O tempo de espera corresponde à duração da animação de zoom-out
  });

  video.addEventListener('loadedmetadata', () => {
    const duration = video.duration;
    const revealTime = (duration - 1) * 1000;
    const freezeAt = duration - 0.1;

    setTimeout(() => {
      content.classList.add('show');
    }, revealTime);

    video.addEventListener('timeupdate', () => {
      if (video.currentTime >= freezeAt) {
        video.pause();
        video.currentTime = freezeAt;

        if (overlay) {
          overlay.classList.add('show');
        }
      }
    });

    video.play();
  });
}

window.addEventListener('DOMContentLoaded', initTransition);
