import {
  FormNewBlock,
  LinkClose,
  PopNewCardBlock,
  PopNewCardCatgories,
  PopNewCardCatgoriesP,
  PopNewCardCatgoriesThemes,
  PopNewCardContainer,
  PopNewCardContent,
  PopNewCardForm,
  PopNewCardTtl,
  PopNewCardWrap,
  SPopNewCard,
} from "./SPopNewCard.styled";
import { Input } from "../../inputs/Input";
import { SLabel } from "../../inputs/SInput.syled";
import TextArea from "../../inputs/TextArea";
import Calendar from "../../calendar/CustomCalendar";
import { themesBgColors, themesColors } from "../../themes/themesColors";
import { ThemeCard } from "../../card/ThemeCard.styled";
import { ThemeCategoryCard } from "../../card/themeCategoryCard.styled";
import { useContext, useState } from "react";
import BlueButton from "../../buttons/blue-button/BlueButton";
import { TasksContext } from "../../../context/TasksContext";
import { FillingError } from "../../auth-form/AuthError.styled";
import { useNavigate } from "react-router-dom";
import { fetchTasks } from "../../../services/api";
import { AuthContext } from "../../../context/AuthContext";

const PopNewCard = () => {
  const themes = ["Web Design", "Research", "Copywriting"];
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const [selectedDate, setSelectedDate] = useState(null);
  const currentDateISO = new Date().toISOString();

  const [dataField, setDataField] = useState({
    title: "Новая задача по умолчанию",
    topic: "Research",
    status: "Без статуса",
    description: "",
    date: currentDateISO,
  });

  const [errors, setErrors] = useState({
    title: false,
    topic: false,
    status: false,
    description: false,
    date: false,
  });

  const { addNewTask, setTasks, error, setError } = useContext(TasksContext);
  const { user } = useContext(AuthContext);

  // const validateForm = () => {
  //   const newErrors = {
  //     title: false,
  //     topic: false,
  //     date: false,
  //   };

  //   let isValid = true;

  //   if (!dataField.title.trim()) {
  //     newErrors.title = true;
  //     setError("Заполните все поля");
  //     isValid = false;
  //   }

  //   if (!selectedDate) {
  //     newErrors.date = true;
  //     setError("Укажите срок исполнения");
  //     isValid = false;
  //   }

  //   return isValid;
  // };

  const handleSelectedTheme = (theme) => {
    setSelectedTheme(theme);
    setDataField((prev) => ({ ...prev, topic: theme }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataField({ ...dataField, [name]: value });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  const handleAddNewTask = async (e) => {
    e.preventDefault();
    if (!user || !user.token) {
      setError("Пользователь не авторизован");
      return;
    }

    const dataToSend = {
      ...dataField,
      date: new Date(selectedDate).toISOString(),
      topic: selectedTheme,
      userId: user._id,
    };

    // if (!validateForm()) {
    //   return;
    // }
    try {
      if (dataToSend) {
        console.log("dataToSend", dataToSend);
        console.log("Перед вызовом addNewTask:", { token: user?.token, user });
        await addNewTask({ task: dataToSend, user }); // вызов пост-запроса
        const updatedTasks = await fetchTasks({ token: user.token });
        console.log("Перед вызовом addNewTask:", { token: user?.token, user });
        setTasks(updatedTasks);
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <SPopNewCard id="popNewCard">
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTtl>Создание задачи</PopNewCardTtl>
            <LinkClose to="/">&#10006;</LinkClose>
            <PopNewCardWrap>
              <PopNewCardForm
                // onSubmit={handleAddNewTask}
                id="formNewCard"
                action="#"
              >
                <FormNewBlock>
                  <SLabel htmlFor="formTitle">Название задачи</SLabel>
                  <Input
                    newCardInput="newCardInput"
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={dataField.title}
                    autoFocus
                    onChange={handleChange}
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <SLabel htmlFor="textArea">Описание задачи</SLabel>
                  <TextArea
                    newCardTextArea="newCardTextArea"
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={dataField.description}
                    onChange={handleChange}
                  />
                </FormNewBlock>
              </PopNewCardForm>
              <Calendar
                onDateChange={(date) => setSelectedDate(date)}
                isEditCalendar={true}
              >
                Выберите срок исполнения.
              </Calendar>
            </PopNewCardWrap>
            <PopNewCardCatgories>
              <PopNewCardCatgoriesP>Категория</PopNewCardCatgoriesP>
              <PopNewCardCatgoriesThemes>
                {themes.map((theme) => (
                  <ThemeCard
                    key={theme}
                    $themePopCard="themePopCard"
                    $themePopNewCard="themePopNewCard"
                    $activeCategory={theme === selectedTheme}
                    $color={themesBgColors[theme]}
                    onClick={() => handleSelectedTheme(theme)}
                  >
                    <ThemeCategoryCard key={theme} $color={themesColors[theme]}>
                      {theme}
                    </ThemeCategoryCard>
                  </ThemeCard>
                ))}
              </PopNewCardCatgoriesThemes>
            </PopNewCardCatgories>
            <FillingError>{error}</FillingError>
            <BlueButton
              variant="newCreate"
              id="btnCreate"
              onClick={handleAddNewTask}
            >
              Создать задачу
            </BlueButton>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </SPopNewCard>
  );
};

export default PopNewCard;
