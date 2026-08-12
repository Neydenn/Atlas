import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from "./app/App.tsx";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import {theme} from "./shared/atlas-ui/theme/theme.ts";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <ThemeProvider theme={theme}>
        <App />
        <CssBaseline />
      </ThemeProvider>
    </StrictMode>,
  </BrowserRouter>
)
