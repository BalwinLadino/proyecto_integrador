import React from "react";

export const Formulario = () => {
  return (
    <div>
      <h2>Entrada Formulario para reserva</h2>
      <h3>Reserve su Cita</h3>
      <div className="col-sm-15 bg-info">
        <form>
          <div className="col-md-3">
            <span>Agregar Nombre:</span>
            <input
              type="text"
              placeholder="Ingrese Nombre"
              className="form-control"
            />

            <span>Agregar Apellido:</span>
            <input
              type="text"
              placeholder="Ingrese Apellido"
              className="form-control"
            />
          </div>
        </form>
        <form>
          <div>
            <span>Agregar No. Identificacion: </span>
            <input type="number" placeholder="No. Identidifcacion" />
          </div>
        </form>
        <form>
          <span>Tipo de Reserva: </span>
          <select>
            <option>Valoraciòn</option>
            <option>Limpieza</option>
            <option>Ortodoncia</option>
            <option>Blanqueamiento</option>
          </select>
        </form>
        <form>
          {/*<input type="submit" value="Guardar" />*/}
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
