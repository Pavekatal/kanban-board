import Column from "../column/Column";
import Card from "../card/Card";
import { MainContent } from "./MainContent.styled";
import { MainBlock } from "./MainBlock.styled";
import { Container } from "./Container.styled";
import { SMain } from "./SMain.styled";
import LoadingText from "../loading/LoadingText";

const Main = ({ error, loading, tasks }) => {
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
                <Column
                  loading={loading}
                  tasks={tasks}
                  key={index}
                  title={title}
                />
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
