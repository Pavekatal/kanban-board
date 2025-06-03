import Main from "../components/main/Main";
import Header from "../components/header/Header";
import { Wrapper } from "../Wrapper.styled";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Outlet />
    </Wrapper>
  );
};

export default MainPage;
