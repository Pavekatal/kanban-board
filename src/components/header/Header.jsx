import { useContext, useState } from "react";
import BlueButton from "../buttons/blue-button/BlueButton";
import PopUser from "../popups/pop-user/PopUser";
import Logo from "../logo/Logo";
import { SHeader } from "./SHeader.styled";
import { Container } from "./Container.styled";
import { HeaderBlock } from "./HeaderBlock.styled";
import { HeaderNav } from "./HeaderNav.styled";
import { HeaderUser } from "./HeaderUser.styled";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const [openPopUser, setOpenPopUser] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <SHeader>
      <Container>
        <HeaderBlock>
          <Logo />
          <HeaderNav>
            <Link to="/card/add">
              <BlueButton id="btnMainNew" variant="header">
                Создать новую задачу
              </BlueButton>
            </Link>

            {openPopUser && <PopUser />}
            <HeaderUser
              onClick={() => {
                setOpenPopUser(!openPopUser);
              }}
              $hover02={true}
            >
              {user.name}
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
