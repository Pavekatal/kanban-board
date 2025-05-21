import Main from "../components/main/Main";
import Header from "../components/header/Header";
import LoadingText from "../components/loading/LoadingText";
import { Wrapper } from "../Wrapper.styled";
import NewCardPage from "./NewCard";
import ViewAndEditCardPage from "./Card";
import ExitPage from "./Exit";
import { Outlet } from "react-router-dom";

const MainPage = ({ loading }) => {
  return (
    <>
      <Wrapper>
        {/* pop-up start */}
        {/* pop-up end */}
        <Header />
        {loading ? <LoadingText /> : <Main />}
        <Outlet />
      </Wrapper>

      {/* <script src="js/script.js"></script> */}
    </>
  );
};

export default MainPage;
