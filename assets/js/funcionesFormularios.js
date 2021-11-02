import { peticionInfo } from './logs.js';
import {
  validacionesTransiciones,
  validarionesFormularioAfd,
  isEmptyObject,
} from './validacionesForm.js';

const div = document.querySelector('#form');
let automataAFD,
  conecAfd = [];

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
          <form id="form-afd-conecciones">
            <input
              placeholder="Estado inicio: q0, q1..."
              type="text"
              class="form-control"
              id="estadoInicio-afd"
            />
            <input
              placeholder="simbolo(del abecedario):"
              type="text"
              class="form-control mt-3"
              id="simbolo-afd"
            />
            <input
              placeholder="Estados Llegada: qf"
              type="text"
              class="form-control mt-3"
              id="estadoLlegada-afd"
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
          <!--Inicio Formularios AFD-->
          <form id="form-ap-1">
            <input
              placeholder="Ingrese abecedario: A, B"
              type="text"
              class="form-control"
              id="abecedario-ap-1"
            />
            <input
              placeholder="Estado inicial: q0"
              type="text"
              class="form-control mt-3"
              id="estadoInicial-ap-1"
            />
            <input
              placeholder="Estados Automatas: q1, q2, q3"
              type="text"
              class="form-control mt-3"
              id="estadosAutomata-ap-1"
            />
            <input
              placeholder="Estados finales: qf, qf1"
              type="text"
              class="form-control mt-3"
              id="estadosFinales-ap-1"
            />
            <input value="Crear automata" class="btn bt-lg btn-dark mt-3" type="submit" id="btn-ap1-form" />
          </form>
          <!--fin Formularios AFD-->
          <!--Inicio Formularios transiciones-->
          <h1 class="text-center mt-3">Transiciones</h1>
          <form id="form-conecciones-ap-1">
            <input
              placeholder="Estado inicio: q0, q1..."
              type="text"
              class="form-control"
              id="estadoInicio-ap-1"
            />
            <input
              placeholder="simbolo(del abecedario):"
              type="text"
              class="form-control mt-3"
              id="simbolo-ap-1"
            />
            <input
              placeholder="Estados Llegada: qf"
              type="text"
              class="form-control mt-3"
              id="estadoFinal-ap-1"
            />
            <input value="Crear Coneccion" class="btn bt-lg btn-dark mt-3" type="submit" />
          </form>
  </div>
  <div class="col-sm-6">
    <h1 class="text-center mt-3">2AP</h1>
          <!--Inicio Formularios AFD-->
          <form id="form-ap2">
            <input
              placeholder="Ingrese abecedario: A, B"
              type="text"
              class="form-control"
              id="abecedario-ap-2"
            />
            <input
              placeholder="Estado inicial: q0"
              type="text"
              class="form-control mt-3"
              id="estadoInicial-ap-2"
            />
            <input
              placeholder="Estados Automatas: q1, q2, q3"
              type="text"
              class="form-control mt-3"
              id="estadosAutomata-ap-2"
            />
            <input
              placeholder="Estados finales: qf, qf1"
              type="text"
              class="form-control mt-3"
              id="estadosFinales-ap-2"
            />
            <input value="Crear automata" class="btn bt-lg btn-dark mt-3" type="submit" id="btn-afd-form" />
          </form>
          <!--fin Formularios AFD-->
          <!--Inicio Formularios transiciones-->
          <h1 class="text-center mt-3">Transiciones</h1>
          <form id="form-conecciones-ap-2">
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
  </div>`;

  div.innerHTML = html;
};

export const ejecutarFormularioAfd = () => {
  /**Recoger datos del automata**/
  const abecedario = document.querySelector('#abecedario').value;
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

  if (!validaciones) {
    return;
  }

  estadosAutomata.push(...estadosFinales);
  estadosAutomata.unshift(estadoInicial);

  automataAFD = {
    abecedario: abecedario.split(','),
    estadoInicial: estadoInicial,
    estadosAutomata: estadosAutomata,
    estadosFinales: estadosFinales,
    afd: true,
  };

  peticionInfo(automataAFD);
};

export const ejecutarFormularioTransicionesAfd = () => {
  if (isEmptyObject(automataAFD)) {
    alert('ingrese el automata primero');
    return;
  }

  const estadoInicial = document.querySelector('#estadoInicio-afd').value;
  const simbolo = document.querySelector('#simbolo-afd').value;
  const estadoLlegada = document.querySelector('#estadoLlegada-afd').value;

  const validaciones = validacionesTransiciones(
    estadoInicial,
    simbolo,
    estadoLlegada,
    automataAFD.abecedario,
    automataAFD.estadosAutomata
  );

  if (!validaciones) {
    return;
  }

  let conec = { estadoInicial, simbolo, estadoLlegada };
  conecAfd.push(conec);

  peticionInfo(conec);
};
