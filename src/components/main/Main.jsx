import Column from "../column/Column";
import Card from "../card/Card";
import { MainContent } from "./MainContent.styled";
import { MainBlock } from "./MainBlock.styled";
import { Container } from "./Container.styled";
import { SMain } from "./SMain.styled";
import LoadingText from "../loading/LoadingText";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Main = ({ error }) => {
  const { loading } = useContext(AuthContext);

  const columnTitles = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <SMain>
      <Container>
        <MainBlock>
          <MainContent>
            {loading ? (
              <LoadingText />
            ) : (
              columnTitles.map((title, index) => (
                <Column key={index} title={title} />
              ))
            )}
          </MainContent>
        </MainBlock>
      </Container>
      <p>{error}</p>
    </SMain>
  );
};

export default Main;
