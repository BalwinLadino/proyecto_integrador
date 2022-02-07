import React from "react";
import { Header } from "./Header";
//import { Icon, createIcon } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import Formulario from "./Formulario";
import Saludo from "./Saludo";
import { Box, Text} from "@chakra-ui/react";

export const Home = (props) => {
  const usuarioActivo = props.usuarioActivo;
  const setIniciarSesion = props.setIniciarSesion;
  const reservas = props.reservas;
  const setReservas = props.setReservas;
  return (
    <div>
      <Header setIniciarSesion={setIniciarSesion} />
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <nav></nav>
          </div>
          {/* <div className="col-sm-4">
            <h3>
              Usuario: {usuarioActivo}
              <img src={iconouser} alt="" height="30rem" />{" "}
            </h3>
          </div> */}

          <Routes>
            <Route
              path="/"
              element={<Saludo usuarioActivo={usuarioActivo} />}
            />
            <Route
              path="/formulario"
              element={
                <Formulario reservas={reservas} setReservas={setReservas} />
              }
            />
          </Routes>

          {/* <img src={} alt="" height="100rem" /> */}
        </div>
      </div>
      <Box>
        <Box mb="10">
          <Text fontSize="30px">
            {" "}
            Bienvenido al sistema de reservas de Odontofamy{" "}
          </Text>
          <Text fontSize="20px">
            La importancia de la prevención bucodental está en que nos permite
            mantener limpios y sanos a nuestras encías, dientes, lengua y boca
            en general con una buena higiene dental diaria. De esta manera
            nuestros dientes pueden cumplir su función y además evitaremos otro
            tipo de complicaciones y enfermedades.
          </Text>
        </Box>

        <Text fontSize="30px">Informacion sobre la clinica</Text>
        <div className="container">
          <div className="row">
            <Text fontSize="20px">Somos una clinica especializada en: </Text>
            <div className="col-sm-5">
              <ul className="p-4">
                <li>Odontologia</li>
                <li>Ortodoncia</li>
                <li>Endodoncia</li>
                <li>Cirujia Oral</li>
              </ul>
            </div>

            <Text fontSize="20px">Ubicaciones: </Text>
            <div className="col-sm-4">
              <ul className="p-4">
                <li>Bogotà, calle 14 · 7 -70</li>
                <li>Villavicencio, calle 15 · 8 - 90</li>
                <li>Boyacà, calle 10 · 7 - 10</li>
                <li>Cucuta, calle 2 · 5 - 33</li>
              </ul>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Home;
