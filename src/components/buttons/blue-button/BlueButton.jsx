import { SBlueButton } from "./SBlueButton.styled";

const BlueButton = ({ id, children, variant, onClick }) => {
  return (
    <SBlueButton
      id={id}
      $header={variant === "header"}
      $popExitYes={variant === "popExitYes"}
      $enter={variant === "enter"}
      $signupEnt={variant === "signupEnt"}
      $btnBg={variant === "btnBg"}
      $newCreate={variant === "newCreate"}
      $hover01={true}
      onClick={onClick}
    >
      {/* <button className="header__btn-main-new _hover01" id="btnMainNew"> */}
      {/* <a href={href}></a> */}
      {/* <a href="#popNewCard">Создать новую задачу</a> */}
      {children}
    </SBlueButton>
  );
};

export default BlueButton;
