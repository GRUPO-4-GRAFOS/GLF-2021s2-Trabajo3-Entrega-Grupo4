import {er, crearAutomatas} from './ER.js';

const btnEr = document.querySelector('#btnEr');

crearAutomatas();

btnEr.addEventListener('click', e => {
  e.preventDefault();
  er();
});