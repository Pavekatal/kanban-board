import WhiteButton from "../../buttons/white-button/WhiteButton";
import BlueButton from "../../buttons/blue-button/BlueButton";
import OrangeTheme from "../../themes/orange-theme/OrangeTheme";
import { Link, useParams } from "react-router-dom";
import { AuthError } from "../../auth-form/AuthError.styled";
import { themesBgColors, themesColors } from "../../themes/themesColors";
import { ThemeCategoryCard } from "../../card/themeCategoryCard.styled";
import { ThemeCard } from "../../card/ThemeCard.styled";
import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../../../context/TasksContext";
import LoadingText from "../../loading/LoadingText";
import "react-calendar/dist/Calendar.css";
import Calendar from "../../calendar/CustomCalendar";
import {
  CategoriesP,
  PopBrowseBlock,
  PopBrowseBtnBrowse,
  PopBrowseBtnEdit,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  PopBrowseFormBlock,
  PopBrowseTopBlock,
  PopBrowseTtl,
  PopBrowseWrap,
  SPopBrowse,
} from "./SPopBrowse.styled";
import {
  SStatus,
  StatusP,
  StatusTheme,
  StatusThemeP,
  StatusThemes,
} from "../../statuses/SStatus.styled";
import { SLabel } from "../../inputs/SInput.syled";
import TextArea from "../../inputs/TextArea";

const PopBrowse = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const { viewTask, error } = useContext(TasksContext);
  const [isEditTask, setIsEditTask] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const statuses = [
    "без статуса",
    "нужно сделать",
    "в работе",
    "тестирование",
    "готово",
  ];

  console.log("params id:", id);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const data = await viewTask({ id });
        console.log("Fetched data:", data);
        setTask(data);
        setSelectedStatus(data.status);
      } catch (error) {
        console.log("Ошибка при получении данных о задаче:", error);
      }
    };
    fetchTask();
  }, [viewTask, id]);

  const handleSelectedStatus = (status) => {
    setSelectedStatus(status);
  };

  const handleEditTask = (event) => {
    event.preventDefault();
    setIsEditTask(true);
  };

  const handleCancelEditTask = (event) => {
    event.preventDefault();
    setIsEditTask(false);
    if (task) setSelectedStatus(task.status);
  };

  return (
    <SPopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          {!task ? (
            <LoadingText />
          ) : (
            <PopBrowseContent>
              <PopBrowseTopBlock id={id}>
                <PopBrowseTtl>{task.title}</PopBrowseTtl>
                <AuthError>{error}</AuthError>
                <ThemeCard
                  $themePopCard="themePopCard"
                  $activeCategory="activeCategory"
                  $color={themesBgColors[task.topic]}
                >
                  <ThemeCategoryCard $color={themesColors[task.topic]}>
                    {task.topic}
                  </ThemeCategoryCard>
                </ThemeCard>
                {/* <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div> */}
              </PopBrowseTopBlock>
              <SStatus>
                <StatusP>Статус</StatusP>
                <StatusThemes>
                  {!isEditTask ? (
                    <StatusTheme $isActive={true} $gray="gray">
                      <StatusThemeP>{task.status}</StatusThemeP>
                    </StatusTheme>
                  ) : (
                    statuses.map((status) => (
                      <StatusTheme
                        key={status}
                        $isActive={
                          status.toLocaleLowerCase() ===
                          selectedStatus.toLowerCase()
                        }
                        onClick={() => handleSelectedStatus(status)}
                      >
                        <p>{status}</p>
                      </StatusTheme>
                    ))
                  )}
                </StatusThemes>
              </SStatus>
              <PopBrowseWrap>
                <PopBrowseForm id="formBrowseCard" action="#">
                  <PopBrowseFormBlock>
                    <SLabel htmlFor="textArea01">Описание задачи</SLabel>
                    <TextArea
                      name="text"
                      id="textArea01"
                      readOnly={!isEditTask}
                      placeholder="Введите описание задачи..."
                    ></TextArea>
                  </PopBrowseFormBlock>
                </PopBrowseForm>
                <Calendar />
              </PopBrowseWrap>
              {/* <div className="theme-down__categories theme-down">
                <CategoriesP>Категория</CategoriesP>
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
              </div> */}

              {!isEditTask ? (
                <PopBrowseBtnBrowse>
                  <div className="btn-group">
                    <WhiteButton variant="btnBor" onClick={handleEditTask}>
                      Редактировать задачу
                    </WhiteButton>
                    {/* <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button> */}
                    <WhiteButton variant="btnBor">Удалить задачу</WhiteButton>
                    {/* <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button> */}
                  </div>
                  <Link to="/">
                    <BlueButton variant="btnBg">Закрыть</BlueButton>
                  </Link>

                  {/* <button className="btn-browse__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button> */}
                </PopBrowseBtnBrowse>
              ) : (
                <PopBrowseBtnEdit>
                  <div className="btn-group">
                    <BlueButton $btnBor="btnBor">Сохранить</BlueButton>
                    {/* <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button> */}
                    <WhiteButton
                      variant="btnBor"
                      onClick={handleCancelEditTask}
                    >
                      Отменить
                    </WhiteButton>
                    {/* <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button> */}
                    <WhiteButton variant="btnBor" href="#">
                      Удалить задачу
                    </WhiteButton>
                    {/* <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button> */}
                  </div>
                  <Link to="/">
                    <BlueButton variant="btnBg" href="#">
                      Закрыть
                    </BlueButton>
                  </Link>

                  {/* <button className="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button> */}
                </PopBrowseBtnEdit>
              )}
            </PopBrowseContent>
          )}
        </PopBrowseBlock>
      </PopBrowseContainer>
    </SPopBrowse>
  );
};

export default PopBrowse;
