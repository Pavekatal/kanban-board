import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { userLS } from "../utils/UsersLS";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(userLS());

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("userInfo");

      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (err) {
      console.error("Ошибка получения данных пользователя из LS:", err.message);
    }
  }, []);

  const updateUserInfo = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem("userInfo", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userInfo");
    }
  };

  const login = (loginData) => {
    updateUserInfo(loginData);
    return true;
  };

  const logout = () => {
    updateUserInfo(null);
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, updateUserInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
