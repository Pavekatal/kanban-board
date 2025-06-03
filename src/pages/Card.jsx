// import { useEffect, useState } from "react";
import PopBrowse from "../components/popups/pop-browse/PopBrowse";
// import { useCallback } from "react";
// import { getTask } from "../services/api";
// import { useParams } from "react-router-dom";

const CardPage = () => {
  // const { id } = useParams();
  // const [task, setTask] = useState([]);
  // const [error, setError] = useState("");

  // console.log("id from useParams:", id);

  // const taskInfo = useCallback(async () => {
  //   try {
  //     const data = await getTask({
  //       id,
  //       token: "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
  //     });
  //     if (data) setTask(data);
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // }, [id]);

  // useEffect(() => {
  //   if (id) {
  //     taskInfo();
  //   }
  // }, [taskInfo, id]);

  return <PopBrowse />;
};

export default CardPage;
