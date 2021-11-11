let nodosA1 = [];
let conexionA1 = [];


//opciones de vis.js
const options = {
  'nodes': {
    'font': {
      'size': 20,
    },
  },
  'edges': {
    'arrows': {
      'to': {
        'enabled': true,
      },
    },
    'font': {
      'size': 20,
    },
  },
};

export const crearAutomatas = () => {
  let contadorA1 = 0;

  //obtener datos del localStorage
  const a1 = JSON.parse(localStorage.getItem('AFD'));
  const c1 = JSON.parse(localStorage.getItem('transAfd'));

  //re escribir los datos de los utomatas para adecuarlo a vis.js
  a1.estadosAutomatas.forEach(element => {
    const nodo = {
      id: element,
      label: element,
    };

    nodosA1.push(nodo);

    contadorA1++;
  });

  //revisa cada transición para encontrar los valores y agregarlos al arreglo de conexiones.
  c1.forEach(({ estadoInicio, simbolo, estadoLlegada }) => {
    const arista = {};
    nodosA1.forEach(element => {
      if (element.label === estadoInicio) {
        arista.from = element.id;
      }
      if (element.label === estadoLlegada) {
        arista.to = element.id;
        arista.label = simbolo;
      }
    });
    conexionA1.push(arista);
  });

  //establecer datos del primer automata
  const nodosAutomata1 = new vis.DataSet(nodosA1);
  const aristasAutomata1 = new vis.DataSet(conexionA1);
  const network1 = document.querySelector('#mynetwork');

  const data1 = {
    nodes: nodosAutomata1,
    edges: aristasAutomata1
  };

  new vis.Network(network1, data1, options);
};

export const er = () => {

};