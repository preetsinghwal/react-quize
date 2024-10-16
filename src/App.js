import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from './StartScreen';

const intialState = {
  questions: [],
  // loading, ready, error, active, finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error("Action Unknown");
  }
}

export default function App() {
  const [{questions, status}, dispatch] = useReducer(reducer, intialState);
  const numQuestion = questions.length;
  
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFaileds" }));
  }, []);

  return (
    <div className="app">
      <Header></Header>
      <Main>
        {status === 'loading' && <Loader/>}
        {status === 'error' && <Error/>}
        {status === 'ready' && <StartScreen numQuestion={numQuestion}/>}
      </Main>
    </div>
  );
}
