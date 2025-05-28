import { useContext } from "react";
import "./App.css";
import AppRoutes from "./components/AppRoutes";
import AuthProvider from "./context/AuthProvider";

import { GlobalStyle } from "./GlobalStyle.style";
import { AuthContext } from "./context/AuthContext";
import SignInPage from "./pages/SignIn";
import TasksProvider from "./context/TasksProvider";

function AppWrapper() {
  const { user } = useContext(AuthContext);

  if (!user || !user.token) {
    return (
      <>
        <GlobalStyle />
        <SignInPage />
      </>
    );
  }

  return (
    <TasksProvider>
      <GlobalStyle />
      <AppRoutes />
    </TasksProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppWrapper />
    </AuthProvider>
  );
}

export default App;
