import Column from "../column/Column";
import Card from "../card/Card";

const Main = () => {
  const columnTitles = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columnTitles.map((title, index) => (
              <Column key={index} title={title} />
            ))}
            {/* <Column title="Без статуса">
              <Card category="web-design" title="Название задачи" />
              <Card category="research" title="Название задачи" />
              <Card category="web-design" title="Название задачи" />
              <Card category="copywriting" title="Название задачи" />
              <Card category="web-design" title="Название задачи" />
            </Column>
            <Column title="Нужно сделать">
              <Card category="research" title="Название задачи" />
            </Column>
            <Column title="В работе">
              <Card category="research" title="Название задачи" />
              <Card category="copywriting" title="Название задачи" />
              <Card category="web-design" title="Название задачи" />
            </Column>
            <Column title="Тестирование">
              <Card category="research" title="Название задачи" />
            </Column>
            <Column title="Готово">
              <Card category="research" title="Название задачи" />
            </Column> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
