// Ativa o efeito zoom-out quando clicar em "Voltar para Início"
document.querySelector('.btn-voltar').addEventListener('click', function (e) {
    e.preventDefault();
  
    document.body.classList.add('zoom-out');
  
    setTimeout(() => {
      window.location.href = this.href;
    }, 600); // mesmo tempo da animação CSS
  });
  