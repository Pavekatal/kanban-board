import { useState } from "react";
import BlueButton from "../buttons/blue-button/BlueButton";
import PopUser from "../popups/pop-user/PopUser";

const Header = () => {
  const [openPopUser, setOpenPopUser] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo"></img>
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo"></img>
            </a>
          </div>
          <nav className="header__nav">
            <BlueButton
              className="header__btn-main-new"
              id="btnMainNew"
              href="#popNewCard"
            >
              Создать новую задачу
            </BlueButton>
            {openPopUser && <PopUser openPopUser={openPopUser} />}
            <a
              href="#"
              onClick={() => {
                setOpenPopUser(!openPopUser);
              }}
              className="header__user _hover02"
            >
              Ivan Ivanov
            </a>

            {/* <a href="#user-set-target" className="header__user _hover02">
              Ivan Ivanov
            </a> */}
            <PopUser />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
