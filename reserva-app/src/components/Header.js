import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
    const setIniciarSesion = props.setIniciarSesion;
    const handleCerrarSesion = () => {
        alert("Sesion cerrada");
        setIniciarSesion(false);
    }
  return (
    <header>
      <nav>
        <NavLink onClick={handleCerrarSesion} to="" className="btn btn-dark">
          Cerrar Sesion
        </NavLink>
      </nav>
      <hr></hr>
    </header>
  );
};
