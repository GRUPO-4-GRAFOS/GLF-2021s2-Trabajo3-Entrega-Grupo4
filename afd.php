<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link
      rel="shortcut icon"
      href="./assets/img/UTEM.svg.png"
      type="image/x-icon"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./assets/css/main.css" />
    <title>Trabajo grafo N°3</title>
  </head>
  <body>
    <div class="container">
      <h1 class="text-center mt-3">Trabajo N°3 Grafos AFD y ER</h1>
      <!-- Inicio Navbar -->
      <nav class="navbar-expand-lg navbar navbar-dark bg-dark mt-3">
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
    <div class="row">
        <div class="col-sm-12 col-md-6 mt-5">
          <h1 class="text-center">AFD</h1>
          <div class="mynetwork" id="afd"></div>
        </div>
    </div>
    <div class="row justify-content-center my-5">
        <div class="row">
            <div class="col-sm-12 col-md-6 mt-5">
                <h1 class="text-center">Expresion regular</h1>
                <div class="mynetwork" id="AFD_Er"></div>
            </div>
        </div>
    </div>
      
    <!--Fin container-->
  </body>
  <scrip type="text/javascript" src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"></script>
  <script src="./assets/js/funcionesEr.js"></script>
</html>