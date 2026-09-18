const formatarDigito = (digito) => {
  return String(digito).padStart(2, '0');
};

const atualizar = (tempo) => {
  const segundos = document.getElementById('segundos');
  const minutos = document.getElementById('minutos');
  const horas = document.getElementById('horas');
  const dias = document.getElementById('dias');

  const qtdSegundos = tempo % 60;

  const qtdMinutos = Math.floor(
    (tempo % (60 * 60)) / 60
  );

  const qtdHoras = Math.floor(
    (tempo % (60 * 60 * 24)) / (60 * 60)
  );

  const qtdDias = Math.floor(
    tempo / (60 * 60 * 24)
  );

  segundos.textContent = formatarDigito(qtdSegundos);
  minutos.textContent = formatarDigito(qtdMinutos);
  horas.textContent = formatarDigito(qtdHoras);
  dias.textContent = formatarDigito(qtdDias);
};

const contagemRegressiva = (tempo) => {
  let restante = tempo;
  let id;

  const contar = () => {
    if (restante <= 0) {
      atualizar(0);
      clearInterval(id);
      const mensagemFim = document.getElementById('mensagemFim');
      if (mensagemFim) {
        mensagemFim.style.display = 'block';
      }
      return;
    }

    atualizar(restante);
    restante--;
  };

  contar();
  id = setInterval(contar, 1000);
};

const tempoRestante = () => {
  // Data do evento: 09/10/2026 às 12:00 (horário de Brasília)
  const dataEvento = new Date('2026-10-09T12:00:00-03:00');
  const hoje = Date.now();

  return Math.floor(
    (dataEvento.getTime() - hoje) / 1000
  );
};

const elementoContador = document.getElementById('dias');

if (elementoContador) {
  contagemRegressiva(Math.max(tempoRestante(), 0));
}
