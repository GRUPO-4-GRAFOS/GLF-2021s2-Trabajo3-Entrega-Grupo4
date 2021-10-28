const div = document.querySelector('#form');
export const crearFormularioAfd = () => {
  const html = `
        <div class="col-6">
          <h1 class="text-center">Afd</h1>
          <!--Inicio Formularios AFD-->
          <form id="from-afn">
            <input
              placeholder="Ingrese abecedario: A, B"
              type="text"
              class="form-control"
            />
            <input
              placeholder="Estado inicial: q0"
              type="text"
              class="form-control mt-3"
            />
            <input
              placeholder="Estados Automatas: q1, q2, q3"
              type="text"
              class="form-control mt-3"
            />
            <input
              placeholder="Estados finales: qf, qf1"
              type="text"
              class="form-control mt-3"
            />
            <input value="Enviar" class="btn bt-lg btn-dark mt-3" />
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
            <input value="Enviar" class="btn bt-lg btn-dark mt-3" />
          </form>
          <!--fin Formularios transiciones-->
        </div>`;

  div.innerHTML = html;
};

export const crearFormularioPl = () => {
  const html = `
    <div class="col-sm-6">
    <h1 class="text-center mt-3">PL1</h1>
    <form id="form-pl1">
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
      />
    </form>
  </div>
  <div class="col-sm-6">
    <h1 class="text-center mt-3">PL2</h1>
    <form id="form-pl2">
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
      />
    </form>
  </div>`;

  div.innerHTML = html;
};
