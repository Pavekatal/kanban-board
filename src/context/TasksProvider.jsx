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
import { toast } from "react-toastify";

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
        toast.error("Не удалось получить список задач");
      } finally {
        setLoading(false);
      }
    };
    if (user) loadTasks();
  }, [user]);

  const viewTask = useCallback(
    async ({ id }) => {
      if (!user) return;
      setLoading(true);
      try {
        const dataTask = await getTask({ id, token: user.token });
        if (dataTask) setTaskData(dataTask);
        return dataTask;
      } catch (err) {
        setError(err.message);
        console.error("Не удалось получить информацию по задаче:", err.message);
        toast.error("Не удалось получить информацию по задаче");
        throw new Error(
          "Не удалось получить информацию по задаче:",
          err.message
        );
      } finally {
        setLoading(false);
      }
    },
    [user]
  );

  const addNewTask = async ({ task }) => {
    setLoading(true);
    try {
      if (!user || !user.token) {
        throw new Error("Нет токена пользователя");
      }
      const newTask = await postTask({
        token: user.token,
        task,
      });
      if (newTask) setTasks(newTask);
      toast.success("Задача успешно добавлена");
    } catch (err) {
      setError(err.message);
      console.error("Не удалось добавить задачу:", err);
      toast.error("Не удалось добавить задачу", err);
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async ({ id, task }) => {
    setLoading(true);
    try {
      const changeTask = await editTask({ token: user.token, id, task });
      if (changeTask) setTasks(changeTask);
      toast.success("Изменения сохранены");
    } catch (err) {
      setError(err.message);
      console.error("Не удалось изменить задачу:", err.message);
      toast.error("Не удалось изменить задачу", err);
    } finally {
      setLoading(false);
    }
  };

  const removeTask = async ({ id }) => {
    setLoading(true);
    try {
      const remoteTask = await deleteTask({ token: user.token, id });
      if (remoteTask) setTasks(remoteTask);
      toast.success("Задача удалена");
    } catch (err) {
      setError(err.message);
      console.error("Не удалось удалить задачу:", err.message);
      toast.error("Не удалось удалить задачу", err);
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
        setLoading,
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
