import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/types_db";
import { useState } from "react";

function useCreateSupabaseClient() {
  const [supabaseClient] = useState(() =>
    createClient<Database>(
      import.meta.env.VITE_PUBLIC_SUPABASE_URL,
      import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
    )
  );

  return supabaseClient;
}

export { useCreateSupabaseClient };
