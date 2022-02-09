import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Text, Center, Input, Stack, Button } from "@chakra-ui/react";

export const Formulario = (props) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [identification, setIdentification] = useState("");
  const [reserve, setReserve] = useState("");
  const [dateTime, setDateTime] = useState("");

  //arreglo state
  const reservas = props.reservas;
  const setReservas = props.setReservas;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const generarId = uuidv4();

    if (
      generarId.trim() !== "" &&
      name.trim() !== "" &&
      lastname.trim() !== "" &&
      identification.trim() !== "" &&
      dateTime.trim() !== "" &&
      reserve.trim() !== ""
    ) {
      const reservaTmp = {
        id: generarId,
        name_usuario: name,
        lastname_usuario: lastname,
        dni: identification,
        fecha_reserva: dateTime,
        tipo_reserva: reserve,
      };

      //debemos guardar la reserva en el arreglo state
      setReservas([...reservas, reservaTmp]);

      setName("");
      setLastname("");
      setIdentification("");
      setDateTime("");
      setReserve("");

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
            <Box bg="green.100" borderRadius="xl">
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
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />

                        <span>Agregar Apellido:</span>
                        <input
                          type="text"
                          placeholder="Ingrese Apellido"
                          className="form-control"
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                        />
                      </Box>

                      <div>
                        <span>Agregar No. identificacion: </span>
                        <input
                          type="number"
                          placeholder="No. Identificacion"
                          value={identification}
                          onChange={(e) => setIdentification(e.target.value)}
                        />
                      </div>

                      <div>
                        <span>Fecha y hora: </span>
                        <input
                          type="datetime-local"
                          value={dateTime}
                          onChange={(e) => setDateTime(e.target.value)}
                        />
                      </div>

                      <span>Tipo de Reserva: </span>
                      <select
                        value={reserve}
                        onChange={(e) => setReserve(e.target.value)}
                      >
                        <option className="bg-info">Elije una</option>
                        <option value="Valoracion">Valoraciòn</option>
                        <option value="Limpieza">Limpieza</option>
                        <option value="Ortodoncia">Ortodoncia</option>
                        <option value="Blanqueamiento">Blanqueamiento</option>
                      </select>

                      {/*<input type="submit" value="Guardar" />*/}
                      <Button
                        type="submit"
                        className="btn btn-primary"
                        colorScheme="teal"
                        align="center"
                      >
                        Enviar
                      </Button>
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
        <Box p={4} bg="white" borderRadius="xl" mb="20">
          <div className="container p-10 mt-5rem">
            <div className="row">
              <div className="col-md-">
                {reservas.length > 0 ? (
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Identificacion</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Tipo de reserva</th>
                      </tr>
                    </thead>

                    <tbody>
                      {reservas.map((reserva) => {
                        return (
                          <tr key={reserva.id}>
                            <td>{reserva.name_usuario}</td>
                            <td>{reserva.lastname_usuario}</td>
                            <td>{reserva.dni}</td>
                            <td>{reserva.fecha_reserva}</td>
                            <td>{reserva.tipo_reserva}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  <h2>NO HAY RESERVAS EN ESTE MOMENTO</h2>
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
