import { SBlueButton } from "./SBlueButton.styled";

const BlueButton = ({ id, href = "#", children, variant }) => {
  return (
    <SBlueButton
      id={id}
      $header={variant === "header"}
      $popExitYes={variant === "popExitYes"}
      $hover01={true}
    >
      {/* <button className="header__btn-main-new _hover01" id="btnMainNew"> */}
      <a href={href}>{children}</a>
      {/* <a href="#popNewCard">Создать новую задачу</a> */}
    </SBlueButton>
  );
};

export default BlueButton;
