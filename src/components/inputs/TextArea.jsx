import { STextArea } from "./SInput.syled";

const TextArea = ({
  type = "text",
  id = "",
  name = "text",
  placeholder = "",
  error = false,
  readOnly = false,
  value = "",
  description = "",
  newCardTextArea,
  onChange,
  $isDark,
  $isEditTask,
}) => {
  return (
    <STextArea
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      $error={error}
      readOnly={readOnly}
      value={value}
      $description={description}
      $newCardTextArea={newCardTextArea}
      onChange={onChange}
      $isDark={$isDark}
      $isEditTask={$isEditTask}
    ></STextArea>
  );
};

export default TextArea;
