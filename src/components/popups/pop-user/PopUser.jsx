import { Link } from "react-router-dom";
import WhiteButton from "../../buttons/white-button/WhiteButton";
import { PopUserSetMail } from "./PopUserSetMail.styled";
import { PopUserSetName } from "./PopUserSetName.styled";
import { PopUserTheme } from "./PopUserTheme.styled";
import { SPopUser } from "./SPopUser.styled";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ThemeContext } from "../../../context/ThemeContext";

const PopUser = () => {
  const { user } = useContext(AuthContext);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <SPopUser id="user-set-target" $popUserSet={true}>
      <PopUserSetName>{user.name}</PopUserSetName>
      <PopUserSetMail>{user.login}</PopUserSetMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <input
          onChange={toggleTheme}
          type="checkbox"
          checked={isDark}
          className="checkbox"
          name="checkbox"
        ></input>
      </PopUserTheme>
      <Link to="/exit">
        <WhiteButton variant="popUserSet">Выйти</WhiteButton>
      </Link>
    </SPopUser>
  );
};

export default PopUser;
