import { SNotFound } from "./SNotFound.styled";
import { SNotFoundText, SNotFoundTtl } from "./SNotFoundText.styled";

const NotFound = () => {
  return (
    <SNotFound>
      <SNotFoundTtl>404</SNotFoundTtl>
      <SNotFoundText>Страница не найдена</SNotFoundText>
    </SNotFound>
  );
};

export default NotFound;
