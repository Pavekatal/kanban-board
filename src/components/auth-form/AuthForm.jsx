import { SAuthForm } from "./SAuthForm.styled";
import { AuthFormModal } from "./AuthFormModal.styled";
import { Input } from "../inputs/Input";
import BlueButton from "../buttons/blue-button/BlueButton";
import { AuthFormContainer } from "./AuthFormContainer.styled";
import { AuthFormModalBlock } from "./AuthFormModalBlock.styled";
import { AuthFormModalTtl } from "./AuthFormModalTtl.styled";
import { AuthFormLogin } from "./AuthFormLogin.styled";
import { AuthFormGroup } from "./AuthFormGroup.styled";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { signIn, signUp } from "../../services/auth";
import { FillingError } from "./AuthError.styled";
import { AuthContext } from "../../context/AuthContext";

const AuthForm = ({ isSignUp }) => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  });

  const [error, setError] = useState("");

  const validateForm = () => {
    const newErrors = { name: false, login: false, password: false };
    let isValid = true;

    if (isSignUp && !userData.name.trim()) {
      newErrors.name = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!userData.login.trim()) {
      newErrors.login = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!userData.password.trim()) {
      newErrors.password = true;
      setError("Заполните все поля");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    try {
      const data = !isSignUp
        ? await signIn({ login: userData.login, password: userData.password })
        : await signUp(userData);

      if (data) {
        login(data);
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <SAuthForm>
      <AuthFormContainer>
        <AuthFormModal>
          <AuthFormModalBlock>
            <AuthFormModalTtl>
              <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
            </AuthFormModalTtl>
            <AuthFormLogin
              onSubmit={handleSubmit}
              // id={isSignUp ? "formLogUp" : "formLogIn"}
            >
              {isSignUp && (
                <Input
                  error={errors.name}
                  type="text"
                  id="formname"
                  name="name"
                  placeholder="Имя"
                  value={userData.name}
                  onChange={handleChange}
                />
              )}
              <Input
                error={errors.login}
                type="text"
                id="formlogin"
                name="login"
                placeholder="Эл. почта"
                value={userData.login}
                onChange={handleChange}
              />
              <Input
                error={errors.password}
                type="password"
                id="formpassword"
                name="password"
                placeholder="Пароль"
                value={userData.password}
                onChange={handleChange}
              />
              <FillingError>{error}</FillingError>
              <BlueButton
                // onClick={handleSubmit}
                id="btnEnter"
                variant={isSignUp ? "signupEnt" : "enter"}
              >
                {isSignUp ? "Зарегистрироваться" : "Войти"}
              </BlueButton>
            </AuthFormLogin>
            {!isSignUp && (
              <AuthFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/register">Регистрируйтесь здесь</Link>
              </AuthFormGroup>
            )}
            {isSignUp && (
              <AuthFormGroup>
                <p>
                  Уже есть аккаунт?<Link to="/login">Войдите здесь</Link>
                </p>
              </AuthFormGroup>
            )}
          </AuthFormModalBlock>
        </AuthFormModal>
      </AuthFormContainer>
    </SAuthForm>
  );
};

export default AuthForm;
