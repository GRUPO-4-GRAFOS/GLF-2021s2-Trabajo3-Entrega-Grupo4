import {
  crearFormularioAfd,
  crearFormularioPl,
  ejecutarFormularioAfd,
  ejecutarFormularioTransicionesAfd,
} from './funcionesFormularios.js';

export const Formularios = () => {
  /*Obtener botones para crear formularios*/
  const btnAfd = document.querySelector('#afd');
  const btn2pl = document.querySelector('#pl');

  /**Evento automata tipo afd*/
  btnAfd.addEventListener('click', e => {
    e.preventDefault();
    crearFormularioAfd();

    /* fomulario afd y conecciones */
    const afdForm = document.querySelector('#form-afd');
    const afdFormConecc = document.querySelector('#form-afd-conecciones');

    /**Eventos formulario automata**/
    afdForm.addEventListener('submit', e => {
      e.preventDefault();
      ejecutarFormularioAfd();
    });

    /**Eventos formulario transiciones**/
    afdFormConecc.addEventListener('submit', e => {
      e.preventDefault();
      ejecutarFormularioTransicionesAfd();
    });
  });

  /**Evento automatas tipo pilas*/
  btn2pl.addEventListener('click', e => {
    e.preventDefault();
    crearFormularioPl();

    //fomulario pl
    const ap1Form = document.querySelector('#form-ap-1');
    const ap2Form = document.querySelector('#form-ap-2');

    ap1Form.addEventListener('submit', e => {
      e.preventDefault();
    });
  });
};
