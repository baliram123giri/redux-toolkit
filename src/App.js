import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const { age } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addAge = () => {
    const value = parseInt(prompt("Please enter age"));
    if(isNaN(value)){
      alert("please enter only numbers!")
    }else{
      dispatch({ type: "ADD_AGE", payload: value });
    }

  };
  return (
    <>
      <h2>My Age Is {age}</h2>
      <button onClick={addAge}>add age</button>
    </>
  );
}

export default App;
