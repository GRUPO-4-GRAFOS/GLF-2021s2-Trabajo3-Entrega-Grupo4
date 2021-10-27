//? Funcion para guardar los automatas
const ejecutarFormularioAutomata = async (
  alfabeto,
  estadoInicial,
  estadoFinal,
  afd,
  afnd
) => {
  const validacionBasica = validacionesAutomata(
    alfabeto.value,
    estadoInicial.value,
    estadoFinal.value,
    afd.checked,
    afnd.checked
  );

  if (!validacionBasica) {
    return false;
  }

  //? guarda datos del usuario en forma de json para facilidad de transferencia de datos
  const data = {
    alfabeto: alfabeto.value,
    estadoInicial: estadoInicial.value,
    estadoFinal: estadoFinal.value,
    afd: afd.checked,
    afnd: afnd.checked,
  };

  peticionInfo(data, 'El automata se agrego correctamente');

  return true;
};

//? Funcion para guardar las transiciones
const ejecutarFormularioTransiciones = (
  estadoBase,
  simbolo,
  estadoFinal,
  alfabeto,
  estados
) => {
  const validacion = validacionesTransiciones(
    estadoBase,
    simbolo,
    estadoFinal,
    alfabeto,
    estados
  );

  if (!validacion) {
    return false;
  }

  const data = {
    estadoBase,
    simbolo,
    estadoLlegada: estadoFinal,
  };

  peticionInfo(data, 'La transicion se agrego correctamente');

  return true;
};
