import Calendar from "../../calendar/Calendar";
import WhiteButton from "../../buttons/white-button/WhiteButton";
import BlueButton from "../../buttons/blue-button/BlueButton";
import OrangeTheme from "../../themes/orange-theme/OrangeTheme";
import { Link, useParams } from "react-router-dom";
// import { useMemo } from "react";
// import { cardList } from "../../data";
import { AuthError } from "../../auth-form/AuthError.styled";
import { themesBgColors, themesColors } from "../../themes/themesColors";
import { ThemeCategoryCard } from "../../card/themeCategoryCard.styled";
import { ThemeCard } from "../../card/ThemeCard.styled";
import { useContext, useEffect, useState } from "react";
import TasksProvider from "../../../context/TasksProvider";
import { TasksContext } from "../../../context/TasksContext";
import LoadingText from "../../loading/LoadingText";

const PopBrowse = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const { viewTask, error } = useContext(TasksContext);

  console.log("params id:", id);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const data = await viewTask({ id });
        console.log("Fetched data:", data);
        setTask(data);
      } catch (error) {
        console.log("Ошибка при получении данных о задаче:", error);
      }
    };
    fetchTask();
  }, [viewTask, id]);

  if (!task) return <LoadingText />;

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div id={id} className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{task.title}</h3>
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
              {/* <OrangeTheme className="categories__theme theme-top _active-category"></OrangeTheme> */}
              {/* <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div> */}
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _gray">
                  <p className="_gray">{task.status}</p>
                </div>
                {/* <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div> */}
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <Calendar />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <WhiteButton variant="btnBor">Редактировать задачу</WhiteButton>
                {/* <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button> */}
                <WhiteButton variant="btnBor">Удалить задачу</WhiteButton>
                {/* <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button> */}
              </div>
              <Link to="/">
                <BlueButton className="btn-browse__close _btn-bg">
                  Закрыть
                </BlueButton>
              </Link>

              {/* <button className="btn-browse__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button> */}
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <BlueButton className="btn-edit__edit _btn-bg" href="#">
                  Сохранить
                </BlueButton>
                {/* <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button> */}
                <WhiteButton className="btn-edit__edit _btn-bor" href="#">
                  Отменить
                </WhiteButton>
                {/* <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button> */}
                <WhiteButton className="btn-edit__delete _btn-bor" href="#">
                  Удалить задачу
                </WhiteButton>
                {/* <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button> */}
              </div>
              <BlueButton className="btn-edit__close _btn-bg" href="#">
                Закрыть
              </BlueButton>
              {/* <button className="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopBrowse;
