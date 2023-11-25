import React from "react";

import { SupabaseClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { Database } from "../types/types_db";

interface SupabaseProviderProps {
  supabaseClient: SupabaseClient<Database, "public", any>;
  children: React.ReactNode;
}

function SupabaseProvider({ supabaseClient, children }: SupabaseProviderProps) {
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
}

export default SupabaseProvider;
