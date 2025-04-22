document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o botão de voltar
  const backButton = document.querySelector(".btn-voltar");

  if (backButton) {
    backButton.addEventListener("click", (event) => {
      // Adiciona a classe zoom-out ao corpo da página
      document.body.classList.add("zoom-out");

      // Aguarda o término da animação antes de redirecionar
      setTimeout(() => {
        window.location.href = backButton.href;
      }, 800); // Tempo igual à duração da animação
    });
  }
});
