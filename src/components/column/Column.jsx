// import { cardList } from "../data.js";
import Card from "../card/Card";
import { ColumnTitle } from "./ColumnTitle.styled.js";
import { Cards } from "./Cards.styled.js";
import { ColumnMain } from "./ColumnMain.styled.js";
import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext.js";
import EmptyList from "../EmptyList/EmptyList.jsx";

const Column = ({ title, column }) => {
  const { tasks, loading } = useContext(TasksContext);
  const validStatus = [
    "без статуса",
    "нужно сделать",
    "в работе",
    "тестирование",
    "готово",
  ];
  console.log("loading from Column:", loading);

  const emptyTasksList = !tasks || tasks.length === 0;

  const statusCheck = tasks.map((task) => {
    if (!validStatus.includes(task.status.toLowerCase())) {
      return { ...task, status: "без статуса" };
    }
    return task;
  });

  return (
    <>
      {emptyTasksList && !loading ? (
        <EmptyList />
      ) : (
        <ColumnMain $column={column}>
          <ColumnTitle>
            <p>{title}</p>
          </ColumnTitle>
          <Cards>
            {loading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <Card card={undefined} loading={true} key={index} />
                ))
              : statusCheck
                  .filter(
                    (card) => card.status.toLowerCase() === title.toLowerCase()
                  )
                  .map((card) => (
                    <Card card={card} loading={false} key={card._id} />
                  ))}
          </Cards>
        </ColumnMain>
      )}
    </>
  );
};

export default Column;
