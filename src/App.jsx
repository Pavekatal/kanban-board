import "./App.css";
import AppRoutes from "./components/AppRoutes";
import AuthProvider from "./context/AuthProvider";
import { GlobalStyle } from "./GlobalStyle.style";
import TasksProvider from "./context/TasksProvider";

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
    <AuthProvider>
      <AppWrapper />
    </AuthProvider>
  );
}

export default App;
