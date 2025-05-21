import AuthForm from "../auth-form/AuthForm";

const SignIn = ({ setIsAuth }) => {
  return <AuthForm setIsAuth={setIsAuth} isSignUp={false} />;
};

export default SignIn;
