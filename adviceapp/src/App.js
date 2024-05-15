import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("	https://api.adviceslip.com/advice");
    const data = await res.json();
    // console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <h1> Get the Advice</h1>
      <button onClick={getAdvice}>Click For Advice</button>
      <h2>Todays Advice is : </h2>
      <h3>{advice}</h3>
      <Message count={count} />
    </div>
  );
}

export default App;
function Message(props) {
  return (
    <>
      <p>
        You have readed <strong>{props.count} </strong> advices.
      </p>
    </>
  );
}
