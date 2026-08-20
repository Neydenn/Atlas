import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./shared/atlas-ui/theme/theme.ts";
import {RouterProvider} from "react-router-dom";
import {router} from "./app/Routes/Router.tsx";
import "./shared/api/interceptors.ts";
import {AuthSession} from "./modules/auth/models/AuthSession.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AuthSession>
        <RouterProvider router={router} />
      </AuthSession>
      <CssBaseline />
    </ThemeProvider>
  </StrictMode>,
)
