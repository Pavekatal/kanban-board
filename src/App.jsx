import "./App.css";
import AppRoutes from "./components/AppRoutes";
import AuthProvider from "./context/AuthProvider";
import { GlobalStyle } from "./GlobalStyle.style";
import TasksProvider from "./context/TasksProvider";
import ThemeProviderCustom from "./context/ThemeProvider";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { GlobalToastStyles, SToastContainer } from "./toast/SToastContainer";

function AppWrapper() {
  const { isDark } = useContext(ThemeContext);

  return (
    <TasksProvider>
      <GlobalStyle />
      <GlobalToastStyles />
      <SToastContainer
        position="top-center"
        autoClose={2000}
        closeOnClick
        hideProgressBar
        transition={Slide}
        themeMode={isDark ? "dark" : "light"}
      />

      <AppRoutes />
    </TasksProvider>
  );
}

function App() {
  return (
    <ThemeProviderCustom>
      <AuthProvider>
        <AppWrapper />
      </AuthProvider>
    </ThemeProviderCustom>
  );
}

export default App;
