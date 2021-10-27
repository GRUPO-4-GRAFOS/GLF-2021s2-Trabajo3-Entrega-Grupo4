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
      <div class="col-sm-12 text-center">
      <label class="form-label rojo"><h4>Seleccione una opcion</h4></label>
      <div   class = "btn-grupo btn- grupo-lg"> 
      </form>
        <form action="./AFD.php" method="post">
              <button type="submit" class="btn btn-success mt-3 mb-3 btn-dark">AFD</button>
        </form>
        <form action="./PL.php" method="post">
              <button type="submit" class="btn btn-success mt-3 mb-3 btn-dark">2 PL</button>
        </form>
 </div> 
 </div> 
 <p></p>
    </div>
    
    <!--Fin container-->



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
    <script src="./assets/js/logs.js"></script>
    <script src="./assets/js/validaciones.js"></script>
    <script src="./assets/js/ejecutar.js"></script>
    <script src="./assets/js/afnd.js"></script>
    <script src="./assets/js/index.js"></script>
    <script src="./assets/js/interseccion.js"></script>
  </body>
</html>

