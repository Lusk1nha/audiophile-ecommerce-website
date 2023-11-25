import { Session, SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../types/types_db";
import { useState, useEffect } from "react";

interface IUseSessionProps {
  supabaseClient: SupabaseClient<Database, "public", any>;
}

function useSupabaseSession({ supabaseClient }: IUseSessionProps) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return session;
}

export { useSupabaseSession };
