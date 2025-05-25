import Main from "../components/main/Main";
import Header from "../components/header/Header";
import { Wrapper } from "../Wrapper.styled";
import { Outlet } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { fetchTasks } from "../services/api";

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const getTasks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchTasks({
        token: "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
      });

      if (data) setTasks(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <>
      <Wrapper>
        {/* pop-up start */}
        {/* pop-up end */}
        <Header />
        <Main error={error} loading={loading} tasks={tasks} />
        <Outlet />
      </Wrapper>

      {/* <script src="js/script.js"></script> */}
    </>
  );
};

export default MainPage;
