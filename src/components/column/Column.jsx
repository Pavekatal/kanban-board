// import { cardList } from "../data.js";
import Card from "../card/Card";
import { ColumnTitle } from "./ColumnTitle.styled.js";
import { Cards } from "./Cards.styled.js";
import { ColumnMain } from "./ColumnMain.styled.js";
import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext.js";

const Column = ({ title, column }) => {
  const { tasks, loading } = useContext(TasksContext);
  const validStatus = [
    "без статуса",
    "нужно сделать",
    "в работе",
    "тестирование",
    "готово",
  ];
  console.log("loading:", loading);
  const statusCheck = tasks.map((task) => {
    if (!validStatus.includes(task.status.toLowerCase())) {
      return { ...task, status: "без статуса" };
    }
    return task;
  });

  return (
    <ColumnMain $column={column}>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {statusCheck
          .filter((card) => card.status.toLowerCase() === title.toLowerCase())
          .map((card, index) => (
            <Card card={card} loading={loading} key={index} />
          ))}
      </Cards>
    </ColumnMain>
  );
};

export default Column;
