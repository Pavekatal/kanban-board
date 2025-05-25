import { SInput } from "./SInput.syled";

export const Input = ({
  type = "text",
  id = "",
  name = "",
  placeholder = "",
  error = false,
  onChange,
}) => {
  return (
    <SInput
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      $error={error}
      onChange={onChange}
    />
  );
};
