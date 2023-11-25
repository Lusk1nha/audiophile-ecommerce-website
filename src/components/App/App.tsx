import React from "react";
import { GlobalStyle } from "../../styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "../../styles/theme/lightTheme";
import { RouterHandler } from "../RouterHandler/RouterHandler";
import SupabaseProvider from "../../providers/SupabaseProvider";

import { useCreateSupabaseClient } from "../../hooks/useCreateSupabaseClient";

function App() {
  const supabaseClient = useCreateSupabaseClient();

  return (
    <React.Fragment>
      <GlobalStyle />

      <ThemeProvider theme={LightTheme}>
        <SupabaseProvider supabaseClient={supabaseClient}>
          <RouterHandler />
        </SupabaseProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export { App };
