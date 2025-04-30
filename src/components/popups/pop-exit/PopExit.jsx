import BlueButton from "../../buttons/blue-button/BlueButton";
import WhiteButton from "../../buttons/white-button/WhiteButton";

const PopExit = () => {
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <BlueButton
                className="pop-exit__exit-yes"
                id="exitYes"
                href="modal/signin.html"
              >
                Да, выйти
              </BlueButton>
              {/* <button className="pop-exit__exit-yes _hover01" id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </button> */}
              <WhiteButton
                className="pop-exit__exit-no"
                id="exitNo"
                href="main.html"
              >
                Нет, остаться
              </WhiteButton>
              {/* <button className="pop-exit__exit-no _hover03" id="exitNo">
                <a href="main.html">Нет, остаться</a>{" "}
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopExit;
