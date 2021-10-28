import { peticionInfo } from './logs.js';
import { validarionesFormularioAfd } from './validacionesForm.js';

const div = document.querySelector('#form');

export const crearFormularioAfd = () => {
  const html = `
        <div class="col-6">
          <h1 class="text-center">Afd</h1>
          <!--Inicio Formularios AFD-->
          <form id="form-afd">
            <input
              placeholder="Ingrese abecedario: A, B"
              type="text"
              class="form-control"
              id="abecedario"
            />
            <input
              placeholder="Estado inicial: q0"
              type="text"
              class="form-control mt-3"
              id="estadoInicial"
            />
            <input
              placeholder="Estados Automatas: q1, q2, q3"
              type="text"
              class="form-control mt-3"
              id="estadosAutomata"
            />
            <input
              placeholder="Estados finales: qf, qf1"
              type="text"
              class="form-control mt-3"
              id="estadosFinales"
            />
            <input value="Crear automata" class="btn bt-lg btn-dark mt-3" type="submit" id="btn-afd-form" />
          </form>
          <!--fin Formularios AFD-->
          <!--Inicio Formularios transiciones-->
          <h1 class="text-center mt-3">Transiciones</h1>
          <form>
            <input
              placeholder="Estado inicio: q0, q1..."
              type="text"
              class="form-control"
            />
            <input
              placeholder="simbolo(del abecedario):"
              type="text"
              class="form-control mt-3"
            />
            <input
              placeholder="Estados Llegada: qf"
              type="text"
              class="form-control mt-3"
            />
            <input value="Crear Coneccion" class="btn bt-lg btn-dark mt-3" type="submit" />
          </form>
          <!--fin Formularios transiciones-->
        </div>`;

  div.innerHTML = html;
};

export const crearFormularioPl = () => {
  const html = `
    <div class="col-sm-6">
    <h1 class="text-center mt-3">1AP</h1>
    <form id="form-ap1">
      <input
        placeholder="ingresa algo"
        class="form-control mt-3"
        type="text"
      />
      <input
        placeholder="ingresa algo"
        class="form-control mt-3"
        type="text"
      />
      <input
        placeholder="ingresa algo"
        class="form-control mt-3"
        type="text"
      />
      <input
        placeholder="ingresa algo"
        class="form-control mt-3"
        type="text"
      />
      <input
        value="Ingresar datos"
        class="btn btn-dark mt-3"
        type="submit"
        id="btn-form-ap1"
      />
    </form>
  </div>
  <div class="col-sm-6">
    <h1 class="text-center mt-3">2AP</h1>
    <form id="form-ap2">
      <input
        placeholder="ingresa algo"
        class="form-control mt-3"
        type="text"
      />
      <input
        placeholder="ingresa algo"
        class="form-control mt-3"
        type="text"
      />
      <input
        placeholder="ingresa algo"
        class="form-control mt-3"
        type="text"
      />
      <input
        placeholder="ingresa algo"
        class="form-control mt-3"
        type="text"
      />
      <input
        value="Ingresar datos"
        class="btn btn-dark mt-3"
        type="submit"
        id="btn-form-ap2"
      />
    </form>
  </div>`;

  div.innerHTML = html;
};

export const ejecutarFormularioAfd = () => {
  /**Recoger datos del automata**/
  const abecedario = document.querySelector('#abecedario').value.split(',');
  const estadoInicial = document.querySelector('#estadoInicial').value;
  const estadosAutomata = document
    .querySelector('#estadosAutomata')
    .value.split(',');
  const estadosFinales = document
    .querySelector('#estadosFinales')
    .value.split(',');

  /**Comprobar validaciones**/
  const validaciones = validarionesFormularioAfd(
    abecedario,
    estadoInicial,
    estadosAutomata,
    estadosFinales
  );
  console.log(validaciones);

  if (!validaciones) {
    alert('si');
    return;
  }

  estadosAutomata.push(...estadosFinales);
  estadosAutomata.unshift(estadoInicial);

  const automata = {
    abecedario: abecedario,
    estadoInicial: estadoInicial,
    estadosAutomata: estadosAutomata,
    estadosFinales: estadosFinales,
  };

  console.log(automata);
  peticionInfo(automata);
};
