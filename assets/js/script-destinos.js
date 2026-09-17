const carrossel = document.getElementById('destinosCarousel');
const botaoAnterior = document.querySelector('.dest-prev');
const botaoProximo = document.querySelector('.dest-next');

if (carrossel && botaoAnterior && botaoProximo) {
  const passo = () => {
    const card = carrossel.querySelector('.dest-card');
    if (!card) return 260;
    const estilo = getComputedStyle(carrossel);
    const gap = parseFloat(estilo.columnGap || estilo.gap || '18');
    return card.getBoundingClientRect().width + gap;
  };

  botaoAnterior.addEventListener('click', () => {
    carrossel.scrollBy({ left: -passo(), behavior: 'smooth' });
  });

  botaoProximo.addEventListener('click', () => {
    carrossel.scrollBy({ left: passo(), behavior: 'smooth' });
  });
}
