import { SWhiteButton } from "./SWhiteButton.styled";

const WhiteButton = ({ id, href = "#", children, variant }) => {
  return (
    <SWhiteButton
      id={id}
      type="button"
      $popUserSet={variant === "popUserSet"}
      $popExitNo={variant === "popExitNo"}
      $hover03={true}
    >
      <a href={href}>{children}</a>
      {/* <a href="#popExit">{children}</a> */}
    </SWhiteButton>
  );
};

export default WhiteButton;
