import { Link, useNavigate } from "react-router-dom";
import BlueButton from "../../buttons/blue-button/BlueButton";
import WhiteButton from "../../buttons/white-button/WhiteButton";
import { PopExitBlock } from "./PopExitBlock.styled";
import { PopExitContainer } from "./PopExitContainer.styled";
import { PopExitFormGroup } from "./PopExitFormGroup.styled";
import { PopExitTtl } from "./PopExitTtl.styled";
import { SPopExit } from "./SPopExit.styled";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const PopExit = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate("/login");
  }
  return (
    <SPopExit id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form
            onSubmit={handleLogout}
            className="pop-exit__form"
            id="formExit"
            action="#"
          >
            <PopExitFormGroup>
              <BlueButton id="exitYes" variant="popExitYes">
                Да, выйти
              </BlueButton>
              {/* <button className="pop-exit__exit-yes _hover01" id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </button> */}
              <Link to="/">
                <WhiteButton id="exitNo" variant="popExitNo">
                  Нет, остаться
                </WhiteButton>
              </Link>
              {/* <button className="pop-exit__exit-no _hover03" id="exitNo">
                <a href="main.html">Нет, остаться</a>{" "}
              </button> */}
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </SPopExit>
  );
};

export default PopExit;
