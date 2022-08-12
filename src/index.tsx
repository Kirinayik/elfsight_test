import {createRoot} from "react-dom/client";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "./assets/styles/theme";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./store";

const root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
  <Provider store={store}>
      <ChakraProvider theme={theme}>
          <App />
      </ChakraProvider>
  </Provider>
);
