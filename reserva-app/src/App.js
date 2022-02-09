import React from "react";
//import {Routes, NavLink,  Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
//import Formulario from "./components/Formulario";
import dentista from "./assets/img/dentista.jpg";
import { Box, Text} from "@chakra-ui/react";
//import { extendTheme } from "@chakra-ui/react";
import "@fontsource/actor";
import fondo from "./assets/img/fondo_odonto.jpg"

//import { Center, Square, Circle, HStack, Box } from "@chakra-ui/react";

import { useState } from "react";

//import {Heading} from '@chakra-ui/react'

function App() {
  const [iniciarSesion, setIniciarSesion] = useState(false);
  const [usuarioActivo, setUsuarioActivo] = useState("");
  const [reservas, setReservas] = useState([]);

  return (
    <div
      style={{
        backgroundImage: `url(${fondo})`,
        height: "100%",
        width: "100%",
        margin: 0,
        backgroundSize: "cover",
      }}
    >
      <>
        {/* <NavLink to="/formulario">INICIO</NavLink> */}

        <div className="container  ">
          <Box>
            <header>
              <Box
                style={{
                  backgroundImage: `url(${dentista})`,
                  height: "30vh",
                  width: "100%",
                  backgroundSize: "cover",
                }}
                borderRadius="xl"
              >
                <div className="p-3 mb-2 ml-30">
                  <Text color="white" fontSize="30">
                    Clinica Odontologíca
                  </Text>
                  <Text color="white" fontSize="60">
                    ODONTO FAMY
                  </Text>
                  <Text color="white" fontSize="20">
                    Salud para tu sonrisa
                  </Text>
                </div>
              </Box>
              <hr></hr>
              <nav>
                <div className="btn-group l-5 ">
                  {/*
              <NavLink to="/" className="btn btn-dark">
                Login
              </NavLink>
              <NavLink to="/Home" className="btn btn-dark">
                Home
              </NavLink>
              <NavLink to="/Formulario" className="btn btn-dark">
                Formulario
              </NavLink>
              */}
                </div>
              </nav>
            </header>
          </Box>

          <main>
            <div className="App">
              {!iniciarSesion ? (
                <Login
                  setIniciarSesion={setIniciarSesion}
                  setUsuarioActivo={setUsuarioActivo}
                />
              ) : (
                <Home
                  usuarioActivo={usuarioActivo}
                  setIniciarSesion={setIniciarSesion}
                  reservas={reservas}
                  setReservas={setReservas}
                />
              )}
            </div>
            {/*
          <Routes>
            <Route path="/Home" element={<Home />} />
             <Route path="/" element={<Login />} /> 
            <Route path="/Formulario" element={<Formulario />} />
          </Routes>
           */}
          </main>
        </div>
        <Box bg="blue.600" ml="20" mr="20" borderRadius="xl">
          <footer className="container mt-5 ">
            <Text fontSize="30px" color="white" as="em">
              Clinica Odontofamy - Derechos reservados
            </Text>
            <br />
            <Text fontSize="20px" color="white" as="em">
              Presentado por: Balwin Ladino
            </Text>
          </footer>
        </Box>

        {/* 
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes> */}
      </>
    </div>
  );
  
}


export default App;
