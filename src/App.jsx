import "./App.css";
import AppRoutes from "./components/AppRoutes";
import AuthProvider from "./context/AuthProvider";
import { GlobalStyle } from "./GlobalStyle.style";
import TasksProvider from "./context/TasksProvider";
import ThemeProviderCustom from "./context/ThemeProvider";

function AppWrapper() {
  return (
    <TasksProvider>
      <GlobalStyle />
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
