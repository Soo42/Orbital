import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../App";

// function Login() {
//   return (
//     <>
//       <h1
//         style={{
//           textAlign: "center",
//           marginTop: "20px",
//           top: "20px",
//         }}
//       >
//         Welcome to LiNkUS!
//       </h1>
//       <div style={{ maxWidth: "400px", margin: "0 auto", top: "50vh" }}>
//         <Auth
//           supabaseClient={supabase}
//           appearance={{ theme: ThemeSupa }}
//           providers={[]}
//         />
//       </div>
//     </>
//   );
// }

function Login() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        overflow: "hidden", // disable scroll
      }}
    >
      <div style={{}}>
        <h1 style={{}}>Welcome to LiNkUS!</h1>
        <div style={{ maxWidth: "400px" }}>
          <Auth
            supabaseClient={supabase}
            view="sign_up"
            localization={{
              variables: {
                sign_in: {
                  email_label: 'Email address(xxx@gmail.com)',
                  password_label: 'Create a password (8 characters minimum)',
                },
              },
            }}
            appearance={{ 
              theme: ThemeSupa, 
              variables: {
                default: {
                  fontSizes: {
                    baseBodySize: '1.3rem',         // larger font size
                    baseInputSize: '1.1rem',
                    baseLabelSize: '0.8rem',
                    baseButtonSize: '1.0rem'
                  },
                  colors: {
                    brand: '#4A90E2', // sign in button bg
                    brandAccent: '#8D2B5D', // when cursor put on sign in button
                    inputBorder: '#A4FF7C', // input border color
                    inputBackground: '#ABCDEF', // input background color
                    inputText: '#111827', // input text color
                    inputPlaceholder: '#FFFFFF', // input placeholder color
                    brandButtonText: '#FFFFFF', // button text color
                    defaultButtonBackground: '#DBD3D6', // button background color
                    defaultButtonText: '#111827', // button text color
                    defaultButtonBackgroundHover: '#A4FF7C',
                  },
                }
              }
            }}
            providers={["google", "github", "apple"]}
            queryParams={{
              access_type: 'offline',
              prompt: 'consent'
            }} // specify providers
          />
        </div>
      </div>
    </div>
  );
}


export default Login;