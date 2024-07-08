import Button from "./Button";
import { useState } from "react";

const Input = ({
  onSubmitHandler,
  inputValue,
  dateValue,
  onInputChangeHandler,
  onDateChangeHandler,
}) => {
  return (
    <>
      <div className="row my-3 text-start" id="test">
        <div className="col-5">
          <input
            type="text"
            value={inputValue}
            placeholder="Enter Todo Here"
            onChange={onInputChangeHandler}
          />
        </div>
        <div className="col-5">
          <input type="date" value={dateValue} onChange={onDateChangeHandler} />
        </div>
        <div className="col-2">
          <button className="btn btn-success w-75" onClick={onSubmitHandler}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
