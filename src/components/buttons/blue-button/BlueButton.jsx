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
      {children}
    </SBlueButton>
  );
};

export default BlueButton;
