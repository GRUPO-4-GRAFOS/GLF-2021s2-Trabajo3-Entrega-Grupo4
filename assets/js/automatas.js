import { union, crearAutomatas, fuicionesNoListas } from './funciones.js';

const btnUnir = document.querySelector('#btnUnion');
const btnIntersectar = document.querySelector('#btnInterseccion');
const btnComplemento = document.querySelector('#btnComplemento');
const btnConcatenacion = document.querySelector('#btnConcatenacion');

crearAutomatas();

btnUnir.addEventListener('click', e => {
  e.preventDefault();
  union();
});

btnIntersectar.addEventListener('click', a => {
  a.preventDefault();
  fuicionesNoListas();
});

btnComplemento.addEventListener('click', e => {
  e.preventDefault();
  fuicionesNoListas();
});

btnConcatenacion.addEventListener('click', e => {
  e.preventDefault();
  fuicionesNoListas();
});
