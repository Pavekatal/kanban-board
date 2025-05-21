import { cardList } from "../data.js";
import Card from "../card/Card";
import { ColumnTitle } from "./ColumnTitle.styled.js";
import { Cards } from "./Cards.styled.js";
import { ColumnMain } from "./ColumnMain.styled.js";

const Column = ({ title, column }) => {
  return (
    <ColumnMain $column={column}>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {cardList
          .filter((card) => card.status === title)
          .map((card, index) => (
            <Card card={card} key={index} />
          ))}
      </Cards>
    </ColumnMain>
  );
};

export default Column;
