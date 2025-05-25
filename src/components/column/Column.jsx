// import { cardList } from "../data.js";
import Card from "../card/Card";
import { ColumnTitle } from "./ColumnTitle.styled.js";
import { Cards } from "./Cards.styled.js";
import { ColumnMain } from "./ColumnMain.styled.js";

const Column = ({ title, column, tasks }) => {
  return (
    <ColumnMain $column={column}>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {tasks
          .filter((card) => card.status.toLowerCase() === title.toLowerCase())
          .map((card, index) => (
            <Card card={card} key={index} />
          ))}
      </Cards>
    </ColumnMain>
  );
};

export default Column;
