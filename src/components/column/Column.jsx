import { cardList } from "../data.js";
import Card from "../card/Card";

const Column = ({ title }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList
          .filter((item) => item.status === title)
          .map((item, index) => (
            <Card item={item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Column;
