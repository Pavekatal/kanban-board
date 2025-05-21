import Column from "../column/Column";
import Card from "../card/Card";
import { MainContent } from "./MainContent.styled";
import { MainBlock } from "./MainBlock.styled";
import { Container } from "./Container.styled";
import { SMain } from "./SMain.styled";

const Main = () => {
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
          </MainContent>
        </MainBlock>
      </Container>
    </SMain>
  );
};

export default Main;
