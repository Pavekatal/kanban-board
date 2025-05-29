import React, { useState } from "react";
import styled from "styled-components";

// Основные стили
const CalendarWrapper = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;

const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  font-size: 14px;
  font-weight: 600;
`;

const CalendarPeriod = styled.div`
  padding: 0 7px;
`;

const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

const DaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

const DayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  &.-weekend- {
    font-weight: bold;
  }
`;

const CellsContainer = styled.div`
  width: 182px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

const Cell = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["isActive", "otherMonth", "isToday", "isSelected"].includes(prop),
})`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  border: none;
  color: ${(props) => (props.isActive ? "#fff" : "#94a6be")};
  background-color: ${(props) => (props.isActive ? "#94A6BE" : "transparent")};
  opacity: ${(props) => (props.otherMonth ? "0.3" : "1")};
  font-weight: ${(props) => (props.isToday ? "bold" : "normal")};

  &:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }
`;

// Стиль стрелок навигации
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px;
  margin-top: 14px;
`;

const NavAction = styled.div`
  width: 18px;
  height: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #94a6be;
  }
`;

// Основной компонент
const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 4)); // сентябрь2023 (месяцы с нуля)
  const [selectedDate, setSelectedDate] = useState(null);

  // Получение данных о текущем месяце
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  // Функция для получения массива дат для отображения
  const generateCalendarDays = () => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startDayIndex = (firstDayOfMonth.getDay() + 6) % 7; // чтобы понедельник был первым днем
    const totalDaysInMonth = lastDayOfMonth.getDate();

    // Предыдущий месяц
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    // Создаем массив дат
    const daysArray = [];

    // Добавляем дни предыдущего месяца (если есть)
    for (let i = startDayIndex - 1; i >= 0; i--) {
      daysArray.push({
        day: Number(prevMonthLastDay - i),
        otherMonth: true,
        date: new Date(year, month - 1, prevMonthLastDay - i),
      });
    }

    // Добавляем дни текущего месяца
    for (let i = 1; i <= totalDaysInMonth; i++) {
      daysArray.push({
        day: i,
        otherMonth: false,
        date: new Date(year, month, i),
      });
    }

    // Заполняем оставшиеся ячейки следующего месяца
    const remainingCells = 42 - daysArray.length; // чтобы было ровно по сетке (6 недель)

    for (let i = 1; i <= remainingCells; i++) {
      daysArray.push({
        day: i,
        otherMonth: true,
        date: new Date(year, month + 1, i),
      });
    }

    return daysArray;
  };

  const days = generateCalendarDays();

  // Обработчики навигации
  const handlePrevMonth = () => {
    setCurrentMonth(new Date(year, month - 1));
  };
  const handleNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1));
  };

  // Обработчик выбора даты
  const handleDateClick = (day) => {
    setSelectedDate(day.date);
  };

  // Форматирование месяца и года для отображения
  const options = { month: "long", year: "numeric" };
  const monthYearStr = currentMonth.toLocaleString("ru-RU", options);

  return (
    <CalendarWrapper className="pop-new-card__calendar calendar">
      <CalendarTitle className="calendar__ttl subttl">Даты</CalendarTitle>
      <div className="calendar__block">
        <Nav className="calendar__nav">
          <div className="calendar__month">{monthYearStr}</div>
          <div className="nav__actions">
            <NavAction
              className="nav__action"
              onClick={handlePrevMonth}
              data-action="prev"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </NavAction>
            <NavAction
              className="nav__action"
              onClick={handleNextMonth}
              data-action="next"
            >
              {/* SVG стрелка вправо */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </NavAction>
          </div>
        </Nav>

        {/* Названия дней недели */}
        <DaysNames className="calendar__days-names">
          <DayName>пн</DayName>
          <DayName>вт</DayName>
          <DayName>ср</DayName>
          <DayName>чт</DayName>
          <DayName>пт</DayName>
          <DayName className="-weekend-">сб</DayName>
          <DayName className="-weekend-">вс</DayName>
        </DaysNames>

        {/* Ячейки с датами */}
        <CellsContainer className="calendar__cells">
          {days.map((day, i) => (
            <Cell
              key={i}
              otherMonth={day.otherMonth}
              isActive={
                selectedDate &&
                day.date.toDateString() === selectedDate.toDateString()
              }
              isToday={day.date.toDateString() === new Date().toDateString()}
              isSelected={
                selectedDate &&
                day.date.toDateString() === selectedDate.toDateString()
              }
              onClick={() => handleDateClick(day)}
            >
              {day.day}
            </Cell>
          ))}
        </CellsContainer>

        {/* Срок исполнения */}
        {selectedDate && (
          <div className="calendar__period">
            <p className="calendar__p date-end">
              Срок исполнения:{" "}
              <span className="date-control">
                {selectedDate.toLocaleString("ru-RU", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                })}
              </span>
            </p>
          </div>
        )}
      </div>
    </CalendarWrapper>
  );
};

export default Calendar;
