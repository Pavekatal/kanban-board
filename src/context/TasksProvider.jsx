import { useCallback, useContext, useEffect, useState } from "react";
import { TasksContext } from "./TasksContext";
import { AuthContext } from "./AuthContext";
import {
  deleteTask,
  editTask,
  fetchTasks,
  getTask,
  postTask,
} from "../services/api";
// import { userLS } from "../utils/UsersLS";

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [taskData, setTaskData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      try {
        const dataTasks = await fetchTasks({ token: user.token });
        if (dataTasks) setTasks(dataTasks);
      } catch (err) {
        setError(err.message);
        console.error("Не удалось получить список задач:", err.message);
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, [user.token]);

  const viewTask = useCallback(
    async ({ id }) => {
      setLoading(true);
      try {
        const dataTask = await getTask({ id, token: user.token });
        if (dataTask) setTaskData(dataTask);
        return dataTask;
      } catch (err) {
        setError(err.message);

        console.error("Не удалось получить информацию по задаче:", err.message);
        throw new Error(
          "Не удалось получить информацию по задаче:",
          err.message
        );
      } finally {
        setLoading(false);
      }
    },
    [user.token]
  );

  const addNewTask = async ({ task }) => {
    console.log("Внутри addNewTask:", { user });
    setLoading(true);
    try {
      console.log("User при вызове postTask:", user);
      if (!user || !user.token) {
        console.log("Нет токена пользователя");
        throw new Error("Нет токена пользователя");
      }
      const newTask = await postTask({
        token: user.token,

        task,
      });
      console.log("User после вызова postTask:", user);
      if (newTask) setTasks(newTask);
    } catch (err) {
      setError(err.message);
      console.error("Не удалось добавить задачу:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async ({ id, task }) => {
    setLoading(true);
    try {
      const changeTask = await editTask({ token: user.token, id, task });
      if (changeTask) setTasks(changeTask);
    } catch (err) {
      setError(err.message);
      console.error("Не удалось изменить задачу:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const removeTask = async ({ id }) => {
    setLoading(true);
    try {
      const remoteTask = await deleteTask({ token: user.token, id });
      if (remoteTask) setTasks(remoteTask);
    } catch (err) {
      setError(err.message);
      console.error("Не удалось удалить задачу:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        taskData,
        loading,
        viewTask,
        addNewTask,
        updateTask,
        removeTask,
        error,
        setError,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
