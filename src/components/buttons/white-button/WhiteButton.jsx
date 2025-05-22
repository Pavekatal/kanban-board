import { SWhiteButton } from "./SWhiteButton.styled";

const WhiteButton = ({ id, children, variant }) => {
  return (
    <SWhiteButton
      id={id}
      type="button"
      $popUserSet={variant === "popUserSet"}
      $popExitNo={variant === "popExitNo"}
      $btnBor={variant === "btnBor"}
      $hover03={true}
    >
      {/* <a href={href}>{children}</a> */}
      {/* <a href="#popExit">{children}</a> */}
      {children}
    </SWhiteButton>
  );
};

export default WhiteButton;
