import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Details } from "./pages";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getDesignTokens, Colors } from "theme";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

const App = () => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: string) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  // @ts-ignore
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
export default App;
