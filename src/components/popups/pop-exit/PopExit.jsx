import BlueButton from "../../buttons/blue-button/BlueButton";
import WhiteButton from "../../buttons/white-button/WhiteButton";
import { PopExitBlock } from "./PopExitBlock.styled";
import { PopExitContainer } from "./PopExitContainer.styled";
import { PopExitFormGroup } from "./PopExitFormGroup.styled";
import { PopExitTtl } from "./PopExitTtl.styled";
import { SPopExit } from "./SPopExit.styled";

const PopExit = () => {
  return (
    <SPopExit id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup>
              <BlueButton
                id="exitYes"
                href="modal/signin.html"
                variant="popExitYes"
              >
                Да, выйти
              </BlueButton>
              {/* <button className="pop-exit__exit-yes _hover01" id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </button> */}
              <WhiteButton id="exitNo" href="main.html" variant="popExitNo">
                Нет, остаться
              </WhiteButton>
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
