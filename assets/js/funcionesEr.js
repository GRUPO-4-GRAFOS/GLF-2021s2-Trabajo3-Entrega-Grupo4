
let nodosAFD = [];
let conexionAFD = [];


//?=================================Opciones de vis.js============================================
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

export const crearAutomata = () => {
  let contadorAFD = 0;

  //?=================================Obtención datos automata AFD============================================
  const a1 = JSON.parse(localStorage.getItem('AFD'));
  //?=================================Obtención transiciones============================================
  const c1 = JSON.parse(localStorage.getItem('transAfd'));

  //?=================================Adecuamos los datos a vis.js============================================
  a1.estadosAutomata.forEach(element => {
    const nodo = {
      id: element,
      label: element,
    };

    nodosAFD.push(nodo);

    contadorAFD++;
  });

  //revisa cada transición para encontrar los valores y agregarlos al arreglo de conexiones.
  c1.forEach(({estadoInicial, simbolo, estadosFinales}) => {
    const arista = {};
    nodosAFD.forEach(element => {
      if (element.label === estadoInicial) {
        arista.from = element.id;
      }
      if (element.label === estadosFinales) {
        arista.to = element.id;
        arista.label = simbolo;
      }
    });
    conexionAFD.push(arista);
  });

  //?=================================Datos del autómata AFD a vis dataset============================================
  const nodosAutomata = new vis.DataSet(nodosAFD);
  const aristasAutomata = new vis.DataSet(conexionAFD);
  const network = document.querySelector('#afd');

  const data = {
    nodes: nodosAutomata,
    edges: aristasAutomata
  };
  //?=================================Creación del Grafo============================================
  new vis.Network(network, data, options);
};

export const er = () => {

};