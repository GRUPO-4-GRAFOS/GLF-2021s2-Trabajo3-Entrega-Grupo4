<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
      crossorigin="anonymous"
    />
    <link
      rel="shortcut icon"
      href="./assets/img/UTEM.svg.png"
      type="image/x-icon"
    />
    <link rel="stylesheet" href="./assets/css/main.css" />
    <title>Trabajo 3 Grafos</title>
  </head>

  <body>
    <div class="text-center my-3">
      <h1 class="fs-1">Grafos Autómatas AFD, PL & ER</h1>
    </div>
    <!--Inicio container-->
    <div class="container">
      <!--Inicio de la row-->
      <div class="row my-3">
        <!--Inicio del menu-->
        <nav class="navbar-expand-lg navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <img
              src="./assets/img/UTEM.svg.png"
              alt="logo-utem"
              class="d-inline-block align-text-top"
              width="50"
              height="50"
            />
          </div>
        </nav>
        <!--Fin del menu-->
      </div>
      <!--Fin de la row-->
      <!--Inicio de la row-->
      <div class="row">
        <h3 class="my-3 text-center">Intrucciones:</h3>
        <ul class="instrucciones">
          <li>
            Para agregar datos a los automatas, debe considerar los siguiente:
          </li>
          <li>Primero: El alfabeto debe ser separado por coma</li>
          <li>
            Segundo: En el estado inicial, el usuario puede agregar infitos
            caracteres, pero solo se considerara como un unico estado inicial
          </li>
          <li>Tercero: El el estado automatas,se debe separar por comas</li>
          <li>Cuarto: El el estado final,se debe separar por comas</li>
          <li>Quinto: El el estado final,se debe separar por comas</li>
          <li>
            Luego de haber agregado el automata debe agregar las transiciones
            con los estados y alfabeto agregado anteriormente
          </li>
        </ul>
      </div>
      <!--Fin de la row-->
      <!--Inicio de la row-->
      <div class="row">
        <div class="col-md-6" id="Automata_1">
          <h2 class="mt-3 mb-5">Primer Autómata</h2>
          <form id="automata1">
            <h5 class="form-label">Alfabeto (Σ)</h5>
            <input
              class="form-control my-2"
              type="text"
              placeholder="0,1"
              id="campo_alfabeto"
            />
            <h5 class="form-label">Estado inicial</h5>
            <input
              class="form-control my-2"
              type="text"
              placeholder="q0"
              id="campo_estadoInicial"
            />
            <h5>Estados automatas</h5>
            <input
              class="form-control my-2"
              type="text"
              placeholder="q1, q2, q3 ...."
              id="campo_estadosAutomata"
            />
            <h5 class="form-label">Estado final</h5>
            <input
              class="form-control my-2"
              type="text"
              placeholder="qf"
              id="campo_estadoFinal"
            />
            <h4>AFD o AFND</h4>
            <input
              type="radio"
              id="AFD"
              name="tipo_automata"
              value="AFD"
              class="form-check-input"
            />
            <label for="AFD">AFD</label><br />
            <input
              type="radio"
              id="AFND"
              name="tipo_automata"
              value="AFND"
              class="form-check-input"
            />
            <label for="AFND">AFND</label><br />
            <input
              id="btn-automata-1"
              class="btn btn-default btn-dark my-3"
              type="submit"
              value="Autómata 1"
            />
          </form>
          <h4>Transiciones</h4>
          <form id="transiciones-automata1">
            <input
              type="text"
              id="estado_Inicial"
              class="form-control my-3"
              placeholder="Estado base"
            />
            <input
              type="text"
              id="simbolo"
              class="form-control my-3"
              placeholder="Símbolo (elemento perteneciente al alfabeto)"
            />
            <input
              type="text"
              id="estado_final"
              class="form-control my-3"
              placeholder="Estado de Llegada"
            />
            <input
              type="submit"
              class="btn btn-dark mb-3"
              value="agregar"
              id="transiciones1"
            />
          </form>
        </div>
      </div>
      <!--fin de la row-->
    </div>
    <!--Fin container-->
   <p></p>
    <!--Inicio botones-->
    <form action="reservar.php" name="mireserva" id="mireserva" method="POST" style="text-align:center margin: 30px auto;  width: 600px;">
      <!-- Contenedor al que se le aplica flexbox -->
      <div class="botonera" style="  display: flex;  justify-content: space-between; width: 100%;">
	      <!-- Botón para ir atrás -->
        <a style="margin-left: 10px" href="./index.php" id="atras" class="btn btn-defaul btn-dark btn-large">Atrás</a>
          <!-- Botón para confirmar -->
          <a style="margin-left: 20px" href="./Conversion.php" id="atras" class="btn btn-defaul btn-dark btn-large">Conversion</a>
      </div>
      <!-- Fin del contenedor -->
    </form>
    <!--Fin botones-->
    <p></p>
    <!--Inicio footer-->
    <div class="section_footer">
      <div class="container">
        <div class="footer_section_2">
          <div class="footer__flex">
            <div>
              <h2 class="shop_text">Quiénes somos</h2>
              <p class="dummy_text">
                Somos un equipo diverso con perspectivas únicas. Unido en
                nuestro propósito. Impulsados por nuestra ambición y el poder de
                explicar de una manera mas dinamica la transformación de un
                grafo afnd a un grafo afd, ademas de obtener el autómata a
                partir del complemento, unión, concatenación e intersección
                entre ambos autómatas.
              </p>
            </div>
            <div>
              <h2 class="shop_text">Integrantes</h2>
              <div class="image-icon">
                <img alt="logo" src="./assets/img/bulit-icon.png" /><span class="pet_text"
                  >Lucas Castillos</span
                >
              </div>
              <div class="image-icon">
                <img alt="logo" src="./assets/img/bulit-icon.png" /><span class="pet_text"
                  >Nicolas Garay</span
                >
              </div>
              <div class="image-icon">
                <img alt="logo" src="./assets/img/bulit-icon.png" /><span class="pet_text"
                  >Javiera Gonzalez</span
                >
              </div>
              <div class="image-icon">
                <img alt="logo" src="./assets/img/bulit-icon.png" /><span class="pet_text"
                  >Rocio Leiva</span
                >
              </div>
              <div class="image-icon">
                <img alt="logo" src="./assets/img/bulit-icon.png" /><span class="pet_text"
                  >Paula Ruiz</span
                >
              </div>
              <div class="image-icon">
                <img alt="logo" src="./assets/img/bulit-icon.png" /><span class="pet_text"
                  >Victor Venegas</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Fin footer-->
    <script src="./assets/js/logs.js"></script>
    <script src="./assets/js/validaciones.js"></script>
    <script src="./assets/js/ejecutar.js"></script>
    <script src="./assets/js/afnd.js"></script>
    <script src="./assets/js/index.js"></script>
    <script src="./assets/js/interseccion.js"></script>
  </body>
</html>
