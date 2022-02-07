import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Text, Center, Input, Stack } from "@chakra-ui/react";

export const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [tipoReserva, setTipoReserva] = useState("");
  const [fechaHora, setFechaHora] = useState("");

  //arreglo state
  const reservas = props.reservas;
  const setReservas = props.setReservas;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const generarId = uuidv4();

    if (
      generarId.trim() !== "" &&
      nombre.trim() !== "" &&
      apellido.trim() !== "" &&
      identificacion.trim() !== "" &&
      fechaHora.trim() !== "" &&
      tipoReserva.trim() !== ""
    ) {
      const reservaTmp = {
        id: generarId,
        nombre_usuario: nombre,
        apellido_usuario: apellido,
        dni: identificacion,
        fecha_reserva: fechaHora,
        tipo_reserva: tipoReserva,
      };

      //debemos guardar la reserva en el arreglo state
      setReservas([...reservas, reservaTmp]);

      setNombre("");
      setApellido("");
      setIdentificacion("");
      setFechaHora("");
      setTipoReserva("");

      alert("Reserva guardada");

      //console.log(reservaTmp);
    } else {
      alert("Faltan datos");
    }
  };

  return (
    <Box>
      <div>
        <div className="container p-3">
          <Center fontSize="30px">Entrada Formulario para reserva</Center>
          <Center fontSize="25px">Reserve su Cita</Center>
          <Center>
            <Box bg="green.100">
              <div className="container p-3">
                <form onSubmit={handleOnSubmit}>
                  <Center>
                    <Stack>
                      <Box>
                        <span>Agregar Nombre:</span>
                        <input
                          type="text"
                          placeholder="Ingrese Nombre"
                          className="form-control"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                        />

                        <span>Agregar Apellido:</span>
                        <input
                          type="text"
                          placeholder="Ingrese Apellido"
                          className="form-control"
                          value={apellido}
                          onChange={(e) => setApellido(e.target.value)}
                        />
                      </Box>

                      <div>
                        <span>Agregar No. Identificacion: </span>
                        <input
                          type="number"
                          placeholder="No. Identidifcacion"
                          value={identificacion}
                          onChange={(e) => setIdentificacion(e.target.value)}
                        />
                      </div>

                      <div>
                        <span>Fecha y hora: </span>
                        <input
                          type="datetime-local"
                          value={fechaHora}
                          onChange={(e) => setFechaHora(e.target.value)}
                        />
                      </div>

                      <span>Tipo de Reserva: </span>
                      <select
                        value={tipoReserva}
                        onChange={(e) => setTipoReserva(e.target.value)}
                      >
                        <option className="bg-info">Elije una</option>
                        <option value="Valoracion">Valoraciòn</option>
                        <option value="Limpieza">Limpieza</option>
                        <option value="Ortodoncia">Ortodoncia</option>
                        <option value="Blanqueamiento">Blanqueamiento</option>
                      </select>

                      {/*<input type="submit" value="Guardar" />*/}
                      <button type="submit" className="btn btn-primary">
                        Enviar
                      </button>
                    </Stack>
                  </Center>
                </form>
              </div>
            </Box>
          </Center>
        </div>
        <Center>
          <Box p={8}>
            <Text fontSize="30px"> Lista de Reservas </Text>
          </Box>
        </Center>
        <Box p={4} bg="white">
          <div className="container p-10 mt-5rem">
            <div className="row">
              <div className="col-md-">
                {reservas.length > 0 ? (
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">DNI</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Tipo de reserva</th>
                      </tr>
                    </thead>

                    <tbody>
                      {reservas.map((reserva) => {
                        return (
                          <tr key={reserva.id}>
                            <td>{reserva.nombre_usuario}</td>
                            <td>{reserva.apellido_usuario}</td>
                            <td>{reserva.dni}</td>
                            <td>{reserva.fecha_reserva}</td>
                            <td>{reserva.tipo_reserva}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  <h2>NO HAY RESERVA EN ESTE MOMENTO</h2>
                )}
              </div>
            </div>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default Formulario;
