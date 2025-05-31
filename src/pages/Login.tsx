import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../App";

function Login() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Welcome to LiNkUS!
      </h1>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]}
      ></Auth>
    </>
  );
}

export default Login;