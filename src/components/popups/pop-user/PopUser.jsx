import WhiteButton from "../../buttons/white-button/WhiteButton";
import { PopUserSetMail } from "./PopUserSetMail.styled";
import { PopUserSetName } from "./PopUserSetName.styled";
import { PopUserTheme } from "./PopUserTheme.styled";
import { SPopUser } from "./SPopUser.styled";

const PopUser = ({ openPopUser }) => {
  return (
    <SPopUser
      id="user-set-target"
      style={{ display: openPopUser ? "block" : "none" }}
      $popUserSet={true}
    >
      {/* <a href="">x</a> */}
      <PopUserSetName>Ivan Ivanov</PopUserSetName>
      <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox"></input>
      </PopUserTheme>
      <WhiteButton href="#popExit" variant="popUserSet">
        Выйти
      </WhiteButton>
      {/* <button type="button" className="_hover03">
        <a href="#popExit">Выйти</a>
      </button> */}
    </SPopUser>
  );
};

export default PopUser;
