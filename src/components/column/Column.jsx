import Card from "../card/Card";
import { ColumnTitle } from "./ColumnTitle.styled.js";
import { Cards } from "./Cards.styled.js";
import { ColumnMain } from "./ColumnMain.styled.js";

const Column = ({ title, tasks, loading }) => {
  return (
    <>
      <ColumnMain>
        <ColumnTitle>
          <p>{title}</p>
        </ColumnTitle>
        <Cards>
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <Card card={undefined} loading={true} key={index} />
              ))
            : tasks.map((card) => (
                <Card card={card} loading={false} key={card._id} />
              ))}
        </Cards>
      </ColumnMain>
    </>
  );
};

export default Column;
