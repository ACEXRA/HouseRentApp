import "./App.css";
import LoginContextProvider from "./component/context/LoginContextProvider";
import Main from "./component/Main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <LoginContextProvider>
      <div className="App">
        <Main />
      </div>
    </LoginContextProvider>
  );
}

export default App;
