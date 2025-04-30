import PopExit from "./components/popups/pop-exit/PopExit";
import PopNewCard from "./components/popups/pop-new-card/PopNewCard";
import PopBrowse from "./components/popups/pop-browse/PopBrowse";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
        {/* pop-up start */}

        <PopExit />

        <PopNewCard />

        <PopBrowse />

        {/* pop-up end */}

        <Header />
        <Main />
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
