import { Link } from "react-router-dom";
import WhiteButton from "../../buttons/white-button/WhiteButton";
import { PopUserSetMail } from "./PopUserSetMail.styled";
import { PopUserSetName } from "./PopUserSetName.styled";
import { PopUserTheme } from "./PopUserTheme.styled";
import { SPopUser } from "./SPopUser.styled";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const PopUser = () => {
  const { user } = useContext(AuthContext);

  return (
    <SPopUser id="user-set-target" $popUserSet={true}>
      {/* <a href="">x</a> */}
      <PopUserSetName>{user.name}</PopUserSetName>
      <PopUserSetMail>{user.login}</PopUserSetMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox"></input>
      </PopUserTheme>
      <Link to="/exit">
        <WhiteButton variant="popUserSet">Выйти</WhiteButton>
      </Link>

      {/* <button type="button" className="_hover03">
        <a href="#popExit">Выйти</a>
      </button> */}
    </SPopUser>
  );
};

export default PopUser;
