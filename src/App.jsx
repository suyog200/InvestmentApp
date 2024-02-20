import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputValid = userInput.duration >= 1;

  function handleUserInput(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
    <Header />
    <UserInput 
    onChangeInput={handleUserInput}
    userInput={userInput}
    />
    {!inputValid && <p className="center">Please enter a valid duration (1 year or more)</p>}
    {inputValid && <Results input={userInput} />}
    </>
  )
}

export default App
