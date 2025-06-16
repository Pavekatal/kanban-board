import Column from "../column/Column";
import { MainContent } from "./MainContent.styled";
import { MainBlock } from "./MainBlock.styled";
import { Container } from "./Container.styled";
import { SMain } from "./SMain.styled";
import { useContext, useEffect } from "react";
import { TasksContext } from "../../context/TasksContext";
import EmptyList from "../EmptyList/EmptyList";

const Main = ({ error }) => {
  const { loading, tasks, getTasks } = useContext(TasksContext);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const columnTitles = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const emptyTasksList = !loading && (!tasks || tasks.length === 0);

  return (
    <SMain>
      <Container>
        <MainBlock>
          <MainContent>
            {emptyTasksList ? (
              <EmptyList />
            ) : (
              columnTitles.map((title, index) => (
                <Column
                  key={index}
                  title={title}
                  loading={loading}
                  tasks={tasks.filter(
                    (card) => card.status.toLowerCase() === title.toLowerCase()
                  )}
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
