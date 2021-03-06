import React from "react";
import { ChakraProvider} from "@chakra-ui/react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from 'react-router-dom'
import theme from './components/theme';




ReactDOM.render(
  <React.StrictMode>
    {" "}
    <ChakraProvider theme={theme}>
   
        <BrowserRouter>
          <App />
        </BrowserRouter>
   
    </ChakraProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
