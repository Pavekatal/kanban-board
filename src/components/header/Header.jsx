import { useState } from "react";
import BlueButton from "../buttons/blue-button/BlueButton";
import PopUser from "../popups/pop-user/PopUser";
import Logo from "../logo/Logo";
import { SHeader } from "./SHeader.styled";
import { Container } from "./Container.styled";
import { HeaderBlock } from "./HeaderBlock.styled";
import { HeaderNav } from "./HeaderNav.styled";
import { HeaderUser } from "./HeaderUser.styled";

const Header = () => {
  const [openPopUser, setOpenPopUser] = useState(false);

  return (
    <SHeader>
      <Container>
        <HeaderBlock>
          <Logo />
          {/* <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo"></img>
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo"></img>
            </a>
          </div> */}
          <HeaderNav>
            <BlueButton id="btnMainNew" href="#popNewCard" variant="header">
              Создать новую задачу
            </BlueButton>
            {openPopUser && <PopUser openPopUser={openPopUser} />}
            <HeaderUser
              href="#"
              onClick={() => {
                setOpenPopUser(!openPopUser);
              }}
              $hover02={true}
            >
              Ivan Ivanov
            </HeaderUser>

            {/* <a href="#user-set-target" className="header__user _hover02">
              Ivan Ivanov
            </a> */}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </SHeader>
  );
};

export default Header;
