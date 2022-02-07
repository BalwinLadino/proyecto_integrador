import React from "react";
import {
  CheckCircleIcon,
} from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";


const Saludo = ({ usuarioActivo }) => {
  return (
    <Box w="100%" p="2">
      <div className="container">
        <div className="row">
          <div className="col-sm-2"> </div>
          <div className="col-sm-6"> </div>
          <div className="col-sm-4">
            <Text fontSize="20">
              Usuario: {usuarioActivo}
              <CheckCircleIcon w={4} h={4}  color="green.400" />
            </Text>{" "}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Saludo;
