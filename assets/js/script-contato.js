const formulario = document.getElementById('formContato');
const nota = document.getElementById('notaEnvio');

if (formulario) {
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

  
    nota.style.display = 'block';
    formulario.reset();
  });
}
