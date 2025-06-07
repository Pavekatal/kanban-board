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
import { ThemeContext } from "../../../context/ThemeContext";

const PopBrowse = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const { viewTask, updateTask, removeTask } = useContext(TasksContext);
  const { user } = useContext(AuthContext);
  const [isEditTask, setIsEditTask] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dataField, setDataField] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const isEditCalendar = isEditTask;
  const { isDark } = useContext(ThemeContext);

  const statuses = [
    "без статуса",
    "нужно сделать",
    "в работе",
    "тестирование",
    "готово",
  ];

  const [errors, setErrors] = useState({
    title: false,
    topic: false,
    status: false,
    description: false,
    date: false,
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const data = await viewTask({ id });
        setTask(data);
        setDataField(data.description);
        setSelectedStatus(data.status);
      } catch (error) {
        console.log("Ошибка при получении данных о задаче:", error);
        alert("Ошибка при получении данных о задаче");
      }
    };
    fetchTask();
  }, [viewTask, id]);

  const validateForm = () => {
    const newErrors = {
      title: false,
      topic: false,
      description: false,
      date: false,
    };

    let isValid = true;

    if (!dataField.trim()) {
      newErrors.description = true;
      setError("Укажите все данные");
      isValid = false;
    }

    if (!selectedStatus) {
      newErrors.topic = true;
      setError("Укажите все данные");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (event) => {
    setDataField(event.target.value);
    setErrors({ ...errors, description: false });
    setError("");
  };

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

    if (!validateForm()) {
      return;
    }

    const dataToSend = {
      ...task,
      description: dataField,
      date: selectedDate ? new Date(selectedDate).toISOString() : task.date,
      status: selectedStatus,
    };

    try {
      await updateTask({ id, user, task: dataToSend });
      const updatedTask = await viewTask({ id, token: user.token });
      setTask(updatedTask);
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

                <ThemeCard
                  $themePopCard="themePopCard"
                  $activeCategory="activeCategory"
                  $color={
                    isDark
                      ? themesColors[task.topic]
                      : themesBgColors[task.topic]
                  }
                >
                  <ThemeCategoryCard
                    $color={
                      isDark
                        ? themesBgColors[task.topic]
                        : themesColors[task.topic]
                    }
                  >
                    {task.topic}
                  </ThemeCategoryCard>
                </ThemeCard>
              </PopBrowseTopBlock>
              <SStatus>
                <StatusP>Статус</StatusP>
                <StatusThemes>
                  {!isEditTask ? (
                    <StatusTheme
                      $isActive={true}
                      $isDark={isDark}
                      $isEditTask={isEditTask}
                      $gray="gray"
                    >
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
                        $isDark={isDark}
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
                      error={errors.description}
                      name="description"
                      id="textArea01"
                      readOnly={!isEditTask}
                      $isDark={isDark}
                      $isEditTask={isEditTask}
                      placeholder="Введите описание задачи..."
                      value={dataField}
                      onChange={handleChange}
                    ></TextArea>
                  </PopBrowseFormBlock>
                </PopBrowseForm>
                <Calendar
                  onDateChange={(date) => setSelectedDate(date)}
                  deadline={formattedDate(task.date)}
                  isEditCalendar={isEditCalendar}
                >
                  Срок исполнения:{" "}
                </Calendar>
              </PopBrowseWrap>
              <FillingError>{error}</FillingError>
              {!isEditTask ? (
                <PopBrowseBtnBrowse>
                  <div className="btn-group">
                    <WhiteButton variant="btnBor" onClick={handleEditTask}>
                      Редактировать задачу
                    </WhiteButton>
                    <WhiteButton onClick={handleDeleteTask} variant="btnBor">
                      Удалить задачу
                    </WhiteButton>
                  </div>
                  <Link to="/">
                    <BlueButton variant="btnBg">Закрыть</BlueButton>
                  </Link>
                </PopBrowseBtnBrowse>
              ) : (
                <PopBrowseBtnEdit>
                  <div className="btn-group">
                    <BlueButton onClick={handleUpdateTask} $btnBor="btnBor">
                      Сохранить
                    </BlueButton>
                    <WhiteButton
                      variant="btnBor"
                      onClick={handleCancelEditTask}
                    >
                      Отменить
                    </WhiteButton>
                    <WhiteButton
                      onClick={handleDeleteTask}
                      variant="btnBor"
                      href="#"
                    >
                      Удалить задачу
                    </WhiteButton>
                  </div>
                  <Link to="/">
                    <BlueButton variant="btnBg" href="#">
                      Закрыть
                    </BlueButton>
                  </Link>
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
