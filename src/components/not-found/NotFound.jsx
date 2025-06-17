import { Link } from "react-router-dom";
import { SNotFound } from "./SNotFound.styled";
import { SNotFoundText, SNotFoundTtl } from "./SNotFoundText.styled";

const NotFound = () => {
  return (
    <SNotFound>
      <SNotFoundTtl>404</SNotFoundTtl>
      <SNotFoundText>Страница не найдена</SNotFoundText>
      <Link to="/">Перейти на главную страницу</Link>
    </SNotFound>
  );
};

export default NotFound;
