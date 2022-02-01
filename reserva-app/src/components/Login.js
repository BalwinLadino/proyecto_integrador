import React, { useState } from "react";
import { usuarios } from "../data/usuarios";
import registro from "./img/registro.JPG"
//import { Navigate } from "react-router-dom";

const Login = (props) => {
  const setIniciarSesion = props.setIniciarSesion;
  const setUsuarioActivo = props.setUsuarioActivo;

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
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-sm-4 bg-info mb-5 p-2">
            <h3>Ingresar o Registrar</h3>
            {formReg && (
              <span>
                <b>Registra tus datos aqui : </b>{" "}
              </span>
            )}

            <form onSubmit={handleOnSubmitLogin}>
              <span>Usuario:</span>
              <input
                type="text"
                value={inputUsuario}
                onChange={(e) => setInputUsuario(e.target.value)}
                placeholder="Usuario"
                className="form-control"
              />
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
              <div className="row p-3">
                <div className="col-sm-4">
                  <input
                    type="submit"
                    className="btn btn-dark"
                    value={formReg ? "Crear Usuario" : "ingresar"}
                  />
                </div>
                <div className="col-sm-4">
                  <p> </p>
                </div>
                <div className="col-sm-4">
                  {formReg ? (
                    ""
                  ) : (
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => setFormReg(!formReg)}
                    >
                      Registrar
                    </button>
                  )}
                </div>
              </div>
            </form>

            {/* <p>
              {inputUsuario} - {inputPassword}{" "}
            </p> */}
          </div>
          <div className="col-sm-1 bg-"></div>
          <div className="col-sm-4 mb-5">
            
            <img src={registro} alt="" height="250rem" /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
