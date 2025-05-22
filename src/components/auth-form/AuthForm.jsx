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

const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
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
              onSubmit={handleLogin}
              id={isSignUp ? "formLogUp" : "formLogIn"}
            >
              {isSignUp && (
                <Input
                  type="text"
                  id="formname"
                  name="name"
                  placeholder="Имя"
                />
              )}
              <Input
                type="text"
                id="formlogin"
                name="login"
                placeholder="Эл. почта"
              />
              <Input
                type="password"
                id="formpassword"
                name="password"
                placeholder="Пароль"
              />
              <BlueButton
                onClick={handleLogin}
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
