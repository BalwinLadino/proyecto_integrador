import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Formulario from "./components/Formulario";
import dentista from "./assets/img/dentista.jpg";
import { Center, Square, Circle, HStack, Box } from "@chakra-ui/react";

import { useState } from "react";

function App() {
  const [iniciarSesion, setIniciarSesion] = useState(false);
  const [usuarioActivo, setUsuarioActivo] = useState("");

  return (
   
      <BrowserRouter>
        <div className="container mt-5 ">
       
            <header>
              <div className="p-3 mb-2 bg-info text-white text-hide ">
                <img src={dentista} alt="" height="200rem" />
                <h1>Clinica Odontologíca ODONTOFAMY</h1>
                <h2>Salud para tu sonrisa</h2>
              </div>
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
        <footer className="container mt-5 bg-info">
          <h2>Clinica Odontofamy (c)</h2>
          <h3>Balwin Ladino</h3>
        </footer>
      </BrowserRouter>
    
  );
}

export default App;
