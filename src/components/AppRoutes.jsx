import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../pages/Main";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import ExitPage from "../pages/Exit";
import NewCardPage from "../pages/NewCard";
import CardPage from "../pages/Card";
import NotFoundPage from "../pages/NotFound";
import PrivateRoute from "./private-route/PrivateRoute";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainPage />}>
            <Route path="card/add" element={<NewCardPage />} />
            <Route path="card/:id" element={<CardPage />} />
            <Route path="exit" element={<ExitPage />} />
          </Route>
        </Route>
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
