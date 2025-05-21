import PopExit from "./components/popups/pop-exit/PopExit";
import PopNewCard from "./components/popups/pop-new-card/PopNewCard";
import PopBrowse from "./components/popups/pop-browse/PopBrowse";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./App.css";
import { useEffect, useState } from "react";
import LoadingText from "./components/loading/LoadingText";
import { Wrapper } from "./Wrapper.styled";
import { GlobalStyle } from "./GlobalStyle.style";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {/* pop-up start */}

        {/* pop-up end */}
        <Header />
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {loading ? <LoadingText /> : <Main />}
      </Wrapper>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
