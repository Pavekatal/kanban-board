import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/Main";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import ExitPage from "../pages/Exit";
import NewCardPage from "../pages/NewCard";
import CardPage from "../pages/Card";
import NotFoundPage from "../pages/NotFound";
import PrivateRoute from "./private-route/PrivateRoute";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage loading={loading} />}>
          <Route path="/card/add" element={<NewCardPage />} />
          <Route path="/card/:id" element={<CardPage />} />
          <Route path="/exit" element={<ExitPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/register" element={<SignUpPage setIsAuth={setIsAuth} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
