import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Navigation } from "./Navigation/Navigation";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { MainPage } from "./MainPage/MainPage";
import { deepPurple, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: deepPurple,
    secondary: red
  },
  typography: {
    h6: {
      fontWeight: 300
    }
  }
});

function App() {
  return (
    <ParallaxProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <MainPage />
      </ThemeProvider>
    </ParallaxProvider>
  );
}

export default App;
