import { SInput } from "./SInput.syled";

export const Input = ({
  type = "text",
  id = "",
  name = "",
  placeholder = "",
  error = false,
  newCardInput,
  autoFocus = true,
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
      $newCardInput={newCardInput}
      autoFocus={autoFocus}
      autoComplete="current-password"
    />
  );
};
