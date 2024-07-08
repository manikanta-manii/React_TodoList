import Heading from "./components/Heading";
import Input from "./components/Input";
import List from "./components/List";
import { useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [todos, setTodos] = useState([{ todo: "1", date: "2" }]);

  const onSubmitHandler = () => {
    if (inputValue && dateValue) {
      const new_todo = {
        todo: inputValue,
        date: dateValue,
      };
      setTodos([...todos, new_todo]);
    } else alert("Enter Todo and Date");
  };
  const onInputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const onDateChangeHandler = (e) => {
    setDateValue(e.target.value);
  };

  function onDeleteHandler(index) {
    const new_todo = [...todos];
    // At index position remove 1 items
    new_todo.splice(index, 1);
    setTodos(new_todo);
  }
  return (
    <>
      <div className="w-50 container text-center">
        <Heading />

        <Input
          inputValue={inputValue}
          dateValue={dateValue}
          onSubmitHandler={onSubmitHandler}
          onInputChangeHandler={onInputChangeHandler}
          onDateChangeHandler={onDateChangeHandler}
        />
        {todos.map((item, index) => (
          <List
            key={index}
            name={item.todo}
            date={item.date}
            onDeleteHandler={onDeleteHandler}
            index={index}
          />
        ))}
      </div>
    </>
  );
}

export default App;
