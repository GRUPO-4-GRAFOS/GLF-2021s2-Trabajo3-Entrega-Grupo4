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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link link-success active" href="./integrantes.php">
              Integrantes
            </a>
          </li>
        </ul>
      </nav>
      <!-- fin Navbar -->
      <!--Inicio row Instrucciones-->
      <div class="row mt-3">
        <div class="col-sm-12"></div>
      </div>
      <!--fin row Instrucciones-->
      <!--Inicio Row-->
      <div class="row mt-3">
        <!--Inicio Botones-->
        <div class="col-sm-6">
          <button class="btn btn-dark btn-lg" id="afd">AFD</button>
        </div>
        <div class="col-sm-6">
          <button class="btn btn-dark btn-lg" id="pl">2AP</button>
        </div>
        <!--Fin Botones-->
      </div>
      <!--fin Row-->
      <!--Inicio Row-->
      <div class="row justify-content-center mt-3" id="form"></div>
      <!--fin Row-->
    </div>
    <!--Fin container-->
  </body>
  <script src="./assets/js/index.js" type="module"></script>
</html>
