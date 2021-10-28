import {
  crearFormularioAfd,
  crearFormularioPl,
  ejecutarFormularioAfd,
} from './funcionesFormularios.js';

export const Formularios = () => {
  const btnAfd = document.querySelector('#afd');
  const btn2pl = document.querySelector('#pl');

  btnAfd.addEventListener('click', e => {
    e.preventDefault();
    crearFormularioAfd();

    //fomulario afd y conecciones
    const afdForm = document.querySelector('#form-afd');

    afdForm.addEventListener('submit', e => {
      e.preventDefault();
      ejecutarFormularioAfd();
    });
  });

  btn2pl.addEventListener('click', e => {
    e.preventDefault();
    crearFormularioPl();

    //fomulario pl
    const ap1Form = document.querySelector('#form-ap1');
    const ap2Form = document.querySelector('#form-ap2');

    ap1Form.addEventListener('submit', e => {
      e.preventDefault();
    });
  });
};
