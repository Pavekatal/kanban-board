import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban";

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
  try {
    const data = await axios.post(API_URL, task, {
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
