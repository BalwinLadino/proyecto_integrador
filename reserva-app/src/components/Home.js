import React from "react";
import { Header } from "./Header";
//import { Icon, createIcon } from "@chakra-ui/react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import iconouser from "./img/iconouser.png";
//import Formulario from "./Formulario";

export const Home = (props) => {
  const usuarioActivo = props.usuarioActivo;
  const setIniciarSesion = props.setIniciarSesion;
  return (
    <div>
      <Header setIniciarSesion={setIniciarSesion} />
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h3> Bienvenido </h3>
            <nav>
              
              <NavLink to="/Formulario" className="btn btn-dark">
                Reserva Cita
              </NavLink>
            </nav>
          </div>
          <div className="col-sm-4">
            <h3>
              Usuario: {usuarioActivo}
              <img src={iconouser} alt="" height="30rem" />{" "}
            </h3>

            {/* <img src={} alt="" height="100rem" /> */}
          </div>
        </div>
      </div>
      <Routes>
   
       
      </Routes>
      <h3>Informacion sobre la clinica</h3>
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <p>Somos una clinica especializada en: </p>
            <ul>
              <li>Odontologia</li>
              <li>Ortodoncia</li>
              <li>Endodoncia</li>
              <li>Cirujia Oral</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h2>Ubicaciones: </h2>
            <ul>
              <li>Bogotà, calle 14 · 7 -70</li>
              <li>Villavicencio, calle 15 · 8 - 90</li>
              <li>Boyacà, calle 10 · 7 - 10</li>
              <li>Cucuta, calle 2 · 5 - 33</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
