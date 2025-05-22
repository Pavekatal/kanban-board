import { SInput } from "./SInput.syled";

export const Input = ({
  type = "text",
  id = "",
  name = "",
  placeholder = "",
}) => {
  return <SInput type={type} id={id} name={name} placeholder={placeholder} />;
};
