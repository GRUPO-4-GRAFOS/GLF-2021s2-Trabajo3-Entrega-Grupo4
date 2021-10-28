import { peticionWarning } from './logs.js';

/**Validaciones formulario automata**/
export const validarionesFormularioAfd = (
  abecedario,
  estadoInicial,
  estadosAutomata,
  estadosFinales
) => {
  let msg = 'El usuario no ha mandado el campo';

  if (abecedario === '') {
    peticionWarning(msg, 'abecedario');
    alert('El campo abecedario es requerido');
    return false;
  }

  if (estadoInicial === '') {
    peticionWarning(msg, 'Estado Inicial');
    alert('El campo Estado Inicial es requerido');
    return false;
  }

  if (estadosFinales === '') {
    peticionWarning(msg, 'Estado Final');
    alert('El campo Estado Final es requerido');
    return false;
  }

  if (estadosAutomata === '') {
    peticionWarning(msg, 'Estado Final');
    alert('El campo Estados automata es requerido');
    return false;
  }

  return true;
};
