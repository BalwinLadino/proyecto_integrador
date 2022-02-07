import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export const Header = (props) => {
  const setIniciarSesion = props.setIniciarSesion;
  const handleCerrarSesion = () => {
    alert("Sesion cerrada");
    setIniciarSesion(false);
  };
  return (
    <Box>
      <header>
        <nav>
          <div className="container mb-2">
            <div className="row">
              <div className="col-sm-1">
                <NavLink to="/" className="btn btn-dark">
                  Home
                </NavLink>
              </div>
              <div className="col-sm-7">
                <NavLink to="/formulario" className="btn btn-dark">
                  Reserva Cita
                </NavLink>
              </div>
              <div className="col-sm-2">
                <button
                  onClick={handleCerrarSesion}
                  className="btn btn-warning"
                >
                  Cerrar Sesion
                </button>
              </div>
            </div>
          </div>
        </nav>
        <hr></hr>
      </header>
    </Box>
  );
};
