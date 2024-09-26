import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./global";
import { defaultTheme } from "./styles/themes/default";

import { Router } from "./router";
import { CartContextProvider } from "./context/cart-context";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
