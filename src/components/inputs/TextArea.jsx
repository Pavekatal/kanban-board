import { SLabel, STextArea } from "./SInput.syled";

const TextArea = ({
  type = "text",
  id = "",
  name = "text",
  placeholder = "",
  error = false,
  readOnly = false,
  onChage,
}) => {
  return (
    <STextArea
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      $error={error}
      readOnly={readOnly}
      onChage={onChage}
    ></STextArea>
  );
};

export default TextArea;
