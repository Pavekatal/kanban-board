import styled from "styled-components";

export const SMyCalendar = styled.div`
  /* Общие стили для контейнера */
  width: 182px;
  margin-bottom: 20px;

  /* Переопределение стилей react-calendar */
  .react-calendar {
    border: none; /* убираем рамку */
    font-family: Arial, sans-serif;
    font-size: 14px;
  }

  /* Названия дней недели */
  .react-calendar__month-view__weekdays {
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
  }

  .react-calendar__month-view__weekdays__weekday {
    flex: 1;
    text-align: center;
    font-weight: bold;
    padding: 8px 0;
  }

  /* Ячейки дней */
  .react-calendar__tile {
    padding: 10px;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;

    /* Можно добавить hover эффект */
    &:hover {
      background-color: #f0f0f0;
      cursor: pointer;
    }
  }

  /* Стиль для выбранных дат (через класс) */
  .my-selected-day {
    background-color: #007bff !important; /* ваш цвет */
    color: #fff !important;
  }

  /* Стиль для дней другого месяца (если нужно) */
  .react-calendar__tile--neighboringMonth {
    opacity: 0.5;
  }
`;

export const STtlCalendar = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
