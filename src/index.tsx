import {createRoot} from "react-dom/client";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "./assets/styles/theme";
import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
