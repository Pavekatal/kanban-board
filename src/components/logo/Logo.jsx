import { Link } from "react-router-dom";
import { HeaderLogo } from "./HeaderLogo.styled";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Logo = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <>
      <HeaderLogo>
        <Link to="/">
          <img
            src={isDark ? "images/logo_dark.png" : "images/logo.png"}
            alt="logo"
          />
        </Link>
      </HeaderLogo>
      {/* <HeaderLogo className="header__logo _dark">
        <Link to="/">
          <img src="images/logo_dark.png" alt="logo"></img>
        </Link>
      </HeaderLogo> */}
    </>
  );
};

export default Logo;
