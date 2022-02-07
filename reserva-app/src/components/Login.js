import React, { useState } from "react";
import { usuarios } from "../data/usuarios";
import registro from "./img/registro.JPG"
import {
  Box,
  Text,
  Center,
  Input,
  VStack,
  useColorModeValue,
  Heading,
  InputGroup
} from "@chakra-ui/react";
//import { Navigate } from "react-router-dom";

const Login = (props) => {
  const setIniciarSesion = props.setIniciarSesion;
  const setUsuarioActivo = props.setUsuarioActivo;
  const colorBg = useColorModeValue("green.200");

  const [inputUsuario, setInputUsuario] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [formReg, setFormReg] = useState(false);
  const [inputCorreo, setInputCorreo] = useState("");

  const handleOnSubmitLogin = (e) => {
    e.preventDefault();
    //const navigate = Navigate;

    if (
      inputUsuario.trim() !== "" &&
      inputPassword.trim() !== "" &&
      inputCorreo.trim() !== ""
    ) {
      const sesion = usuarios.find((usuario) => {
        if (usuario.usuario === inputUsuario) {
          return usuario;
        }
      });
      if (!sesion) {
        usuarios.push({
          id: 4,
          usuario: inputUsuario,
          password: inputPassword,
        });
        setInputUsuario("");
        setInputCorreo("");
        setInputPassword("");
        setFormReg(false);
        alert("Usuario registrado");
      } else {
        alert("Este usuario ya existe: ");
      }
    } else {
      if (inputUsuario.trim() !== "" && inputPassword.trim() !== "") {
        const sesion = usuarios.find((usuario) => {
          if (
            usuario.usuario === inputUsuario &&
            usuario.password === inputPassword
          ) {
            return usuario;
          }
        });
        console.log(sesion);

        if (!sesion) {
          alert("Usuario o Constraseña incorrecta");
        } else {
          setUsuarioActivo(sesion.usuario);
          alert("Sesion iniciada");
          setIniciarSesion(true);
          //navigate("../Home", { replace: true });
        }
      }
    }
    console.log(usuarios);
  };
  return (
    <Center>
      <VStack spacing={8}>
        <Heading size="lg">Ingresar o Registrar</Heading>
        <Box bg = {colorBg}
        >
          <div>
            <div className="container">
              <div className="row ">
                <div className="p-2">
                  {formReg && (
                    <span>
                      <b>Registra tus datos aqui : </b>{" "}
                    </span>
                  )}

                  <form onSubmit={handleOnSubmitLogin}>
                    <Box w="100%">
                      <span>Usuario:</span>

                      <input
                        type="text"
                        value={inputUsuario}
                        onChange={(e) => setInputUsuario(e.target.value)}
                        placeholder="Usuario"
                        className="form-control"
                      />
                    </Box>
                    {formReg && <span>Correo: </span>}
                    {formReg && (
                      <input
                        value={inputCorreo}
                        onChange={(e) => setInputCorreo(e.target.value)}
                        type="mail"
                        placeholder="Correo"
                        className="form-control"
                      />
                    )}

                    <span>Contraseña:</span>
                    <input
                      type="password"
                      value={inputPassword}
                      onChange={(e) => setInputPassword(e.target.value)}
                      placeholder="Constraseña"
                      className="form-control"
                    />
                    <div>
                      <Center>
                        <InputGroup p="2" m="1">
                          <div>
                            <input
                              type="submit"
                              className="btn btn-dark"
                              value={formReg ? "Crear Usuario" : "Ingresar"}
                            />
                          </div>
                        </InputGroup>
                        <div></div>
                        <InputGroup p="2" m="1">
                          <div>
                            {formReg ? (
                              ""
                            ) : (
                              <button
                                type="button"
                                className="btn btn-warning"
                                onClick={() => setFormReg(!formReg)}
                              >
                                Registrar
                              </button>
                            )}
                          </div>
                        </InputGroup>
                      </Center>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </VStack>
    </Center>
  );
};

export default Login;
