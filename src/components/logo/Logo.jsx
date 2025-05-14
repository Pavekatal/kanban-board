import { HeaderLogo } from "./HeaderLogo.styled";

const Logo = () => {
  return (
    <>
      <HeaderLogo className="header__logo _show _light">
        <a href="" target="_self">
          <img src="images/logo.png" alt="logo"></img>
        </a>
      </HeaderLogo>
      <HeaderLogo className="header__logo _dark">
        <a href="" target="_self">
          <img src="images/logo_dark.png" alt="logo"></img>
        </a>
      </HeaderLogo>
    </>
  );
};

export default Logo;
