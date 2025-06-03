import axios from "axios";
import { userLS } from "../utils/UsersLS";

const API_URL = "https://wedev-api.sky.pro/api/kanban/";

export async function fetchTasks({ token }) {
  try {
    const data = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getTask({ id, token }) {
  try {
    const data = await axios.get(API_URL + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data.task;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function postTask({ token, task }) {
  if (!token) {
    throw new Error("Токен отсутствует");
  }
  try {
    const user = userLS();
    const requestBody = {
      ...task,
      userId: user._id,
    };
    const response = await axios.post(API_URL, requestBody, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });

    if (response.data === 204 || !response.data) {
      return [];
    }

    response.data.tasks || response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      const errorData = error.response.data;
      throw new Error(
        errorData.message || `Ошибка API: статус ${error.response.status}`
      );
    } else if (error.request) {
      throw new Error("Нет ответа от сервера");
    } else {
      throw new Error(error.message);
    }
  }
}

export async function editTask({ id, token, task }) {
  try {
    const data = await axios.put(API_URL + id, task, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "",
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteTask({ id, token }) {
  try {
    const data = await axios.delete(API_URL + id, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text",
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}
