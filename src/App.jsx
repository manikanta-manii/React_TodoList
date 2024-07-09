import Heading from "./components/Heading";
import Input from "./components/Input";
import List from "./components/List";
import { useState, useEffect } from "react";
import { CircularProgress, Alert } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //need explaniation
  useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const onSubmitHandler = () => {
    if (inputValue && dateValue) {
      const new_todo = {
        todo: inputValue,
        date: dateValue,
      };
      setTodos([...todos, new_todo]);
      toast.success("New Todo is Added !");
    } else {
      toast.error("Add some values");
    }
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
    toast.info("Todo is Deleted!");
  }
  return (
    <>
      <div className="w-50 container text-center">
        <div id="alert-display"></div>
        <ToastContainer />
        <Heading />

        {isLoading && <CircularProgress color="success" />}

        {!isLoading && (
          <Input
            inputValue={inputValue}
            dateValue={dateValue}
            onSubmitHandler={onSubmitHandler}
            onInputChangeHandler={onInputChangeHandler}
            onDateChangeHandler={onDateChangeHandler}
          />
        )}
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
