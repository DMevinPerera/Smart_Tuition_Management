// ====================================
// Amplify and Cognito Default Template
// ====================================

import React from "react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import {
  useTheme,
  View,
  Authenticator,
  useAuthenticator,
  Button,
  ThemeProvider,
} from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";
// import Header from "./components/Header";
import AdminQuestionsPage from "./components/AdminQuestionsPage";
import AdminAddQuestionsPage from "./components/AdminAddQuestionsPage";
import UserQuestionsPage from "./components/UserQuestionsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

Amplify.configure(awsExports);

const components = {
  Header() {
    const { tokens } = useTheme();

    return <View textAlign="center" padding="relative.xxxl"></View>;
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span
            style={{ color: "#4ad0cc", fontWeight: "800", fontSize: "35px" }}
          >
            Welcome to Smart Tuition System
          </span>
        </div>
      );
    },
    Footer() {
      const { toForgotPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toForgotPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span
            style={{ color: "#4ad0cc", fontWeight: "800", fontSize: "35px" }}
          >
            Sign Up
          </span>
        </div>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          Already have a account?
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
            color={"#52b1ae"}
          >
            Sign In
          </Button>
        </View>
      );
    },
  },
};

export default function App() {
  const { tokens } = useTheme();
  const theme = {
    name: "Auth Example Theme",
    tokens: {
      components: {
        authenticator: {
          router: {
            boxShadow: `0 0 16px ${tokens.colors.overlay["10"]}`,
            borderWidth: "0",
          },
          form: {
            padding: `${tokens.space.medium} ${tokens.space.xl} ${tokens.space.medium}`,
          },
        },
        button: {
          primary: {
            backgroundColor: "#4ad0cc",
          },
          link: {
            color: tokens.colors.purple["80"],
          },
          _hover: {
            backgroundColor: "#52b1ae",
            cursor: "pointer",
          },
        },
      },
    },
  };
  return (
    
    <ThemeProvider theme={theme}>

  <Authenticator components={components}>
    {({ signOut, user }) => {
      console.log(user.signInDetails.loginId);
      if(user.signInDetails.loginId=="admin@gmail.com"){
        console.log("This is Admin");
        return (
          <>
                 {/* <Header /> */}
              <main>
              <h1>Admin</h1>
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
              <Router>
                <Routes>
                    <Route path="/admin/add-questions" element={<AdminAddQuestionsPage />} />
                    <Route path="/admin/questions" element={<AdminQuestionsPage />} />
                </Routes>
              </Router>
            </main>
          </>
        );
      }else{
        console.log("This is User");
        return (
          <>
              <main>
              <h1>Client</h1>
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
            {/* <Header signOutFun={signOut} /> */}
            <Router>
                <Routes>
                    <Route path="/user/questions" element={<UserQuestionsPage />} />
                </Routes>
              </Router>
          </>
        );
      }

    }}
  </Authenticator>
</ThemeProvider>
  );
}
