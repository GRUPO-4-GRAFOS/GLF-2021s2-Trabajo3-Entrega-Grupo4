import { crearFormularioAfd, crearFormularioPl } from './crearFormularios.js';

const btnAfd = document.querySelector('#afd');
const btn2pl = document.querySelector('#pl');

btnAfd.addEventListener('click', e => {
  e.preventDefault();
  crearFormularioAfd();
});

btn2pl.addEventListener('click', e => {
  e.preventDefault();
  crearFormularioPl();
});
