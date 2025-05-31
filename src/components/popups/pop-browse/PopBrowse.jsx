import WhiteButton from "../../buttons/white-button/WhiteButton";
import BlueButton from "../../buttons/blue-button/BlueButton";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FillingError } from "../../auth-form/AuthError.styled";
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
import { formattedDate } from "../../../utils/formattedDate";
import { AuthContext } from "../../../context/AuthContext";

const PopBrowse = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const { viewTask, updateTask, removeTask, error, setError } =
    useContext(TasksContext);
  const { user } = useContext(AuthContext);
  const [isEditTask, setIsEditTask] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dataField, setDataField] = useState(null);
  const navigate = useNavigate();

  // const [errors, setErrors] = useState({
  //   title: false,
  //   topic: false,
  //   status: false,
  //   description: false,
  //   date: false,
  // });

  const statuses = [
    "без статуса",
    "нужно сделать",
    "в работе",
    "тестирование",
    "готово",
  ];

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const data = await viewTask({ id });
        console.log("Fetched data:", data);
        setTask(data);
        setDataField(data.description);
        setSelectedStatus(data.status);
      } catch (error) {
        console.log("Ошибка при получении данных о задаче:", error);
      }
    };
    fetchTask();
  }, [viewTask, id]);

  //  title: data.title,
  //         topic: data.topic,
  //         status: data.status,
  //         description: data.description,
  //         date: data.date,
  //         userId: user._id,

  const handleEditTask = async (event) => {
    event.preventDefault();
    setIsEditTask(true);
  };

  const handleCancelEditTask = (event) => {
    event.preventDefault();
    setIsEditTask(false);
    if (task) setSelectedStatus(task.status);
  };

  const handleSelectedStatus = (status) => {
    setSelectedStatus(status);
  };

  const handleUpdateTask = async (event) => {
    event.preventDefault();

    if (!user || !user.token) {
      setError("Пользователь не авторизован");
      return;
    }

    const dataToSend = {
      ...task,
      description: dataField,
      date: selectedDate ? new Date(selectedDate).toISOString() : task.date,
      status: selectedStatus,
    };

    try {
      console.log("dataToSend перед запросом updateTask", dataToSend);
      console.log("Передаваемый id в updateTask", id);
      await updateTask({ id, user, task: dataToSend });
      const updatedTask = await viewTask({ id, token: user.token });
      setTask(updatedTask);
      console.log("dataToSend после запроса updateTask", dataToSend);
      setIsEditTask(false);
      setError("");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  const handleDeleteTask = async (event) => {
    event.preventDefault();
    try {
      const updatedTask = await removeTask({ id, token: user.token });
      // const updatedTask = await viewTask({ id, token: user.token });
      setTask(updatedTask);
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
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
                <FillingError>{error}</FillingError>
                <ThemeCard
                  $themePopCard="themePopCard"
                  $activeCategory="activeCategory"
                  $color={themesBgColors[task.topic]}
                >
                  <ThemeCategoryCard $color={themesColors[task.topic]}>
                    {task.topic}
                  </ThemeCategoryCard>
                </ThemeCard>
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
                        $isEdit={true}
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
                      name="description"
                      id="textArea01"
                      readOnly={!isEditTask}
                      placeholder="Введите описание задачи..."
                      value={dataField}
                      onChange={(event) => setDataField(event.target.value)}
                    ></TextArea>
                  </PopBrowseFormBlock>
                </PopBrowseForm>
                <Calendar
                  onDateChange={(date) => setSelectedDate(date)}
                  deadline={formattedDate(task.date)}
                >
                  Срок исполнения:{" "}
                </Calendar>
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
                    <WhiteButton onClick={handleDeleteTask} variant="btnBor">
                      Удалить задачу
                    </WhiteButton>
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
                    <BlueButton onClick={handleUpdateTask} $btnBor="btnBor">
                      Сохранить
                    </BlueButton>
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
                    <WhiteButton
                      onClick={handleDeleteTask}
                      variant="btnBor"
                      href="#"
                    >
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
