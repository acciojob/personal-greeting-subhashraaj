
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [inputValue, setInputValue] = userState("");
    const onChangeText = (event) => {
        setInputValue(event.target.value);
  }
  return (
    <div>
        <lable htmlFor="name" >Enter your name<label>
        <input id="name" onChnage={onChangeText} />
        {inputValue && <p>{`Hello ${inputValue}!`</p>
         {inputValue && <p>{`Hello ${inputValue}!`}</p>}
    </div>
  )
}

export default App
