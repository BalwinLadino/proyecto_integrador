import React, { useState } from "react";
import { usuarios } from "../data/usuarios";
//import registro from "./img/registro.JPG"
import {
  Box,
  Center,
  VStack,
  useColorModeValue,
  Heading,
  InputGroup,
  Button,
} from "@chakra-ui/react";
//import { Navigate } from "react-router-dom";

const Login = (props) => {
  const setIniciarSesion = props.setIniciarSesion;
  const setUsuarioActivo = props.setUsuarioActivo;
  const colorBg = useColorModeValue("green.200");

  const [inputUser, setinputUser] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [formReg, setFormReg] = useState(false);
  const [inputMail, setinputMail] = useState("");

  const handleOnSubmitLogin = (e) => {
    e.preventDefault();
    //const navigate = Navigate;

    if (
      inputUser.trim() !== "" &&
      inputPassword.trim() !== "" &&
      inputMail.trim() !== ""
    ) {
      const sesion = usuarios.find((usuario) => {
        if (usuario.usuario === inputUser) {
          return usuario;
        }
      });
      if (!sesion) {
        usuarios.push({
          id: 4,
          usuario: inputUser,
          password: inputPassword,
        });
        setinputUser("");
        setinputMail("");
        setInputPassword("");
        setFormReg(false);
        alert("Usuario registrado");
      } else {
        alert("Este usuario ya existe: ");
      }
    } else {
      if (inputUser.trim() !== "" && inputPassword.trim() !== "") {
        const sesion = usuarios.find((usuario) => {
          if (
            usuario.usuario === inputUser &&
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
        <Box bg={colorBg} borderRadius="xl">
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
                        value={inputUser}
                        onChange={(e) => setinputUser(e.target.value)}
                        placeholder="Usuario"
                        className="form-control"
                      />
                    </Box>
                    {formReg && <span>Correo: </span>}
                    {formReg && (
                      <input
                        value={inputMail}
                        onChange={(e) => setinputMail(e.target.value)}
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
                              <Button
                                type="button"
                                className=""
                                onClick={() => setFormReg(!formReg)}
                              >
                                Registrar
                              </Button>
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
