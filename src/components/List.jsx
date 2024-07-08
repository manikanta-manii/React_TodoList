import Button from "./Button";
const List = (props) => {
  return (
    <>
      <div className="row my-3 text-start">
        <div className="col-5">{props.name}</div>
        <div className="col-5">{props.date}</div>
        <div className="col-2">
          <button
            className="btn btn-danger w-75"
            onClick={() => props.onDeleteHandler(props.index)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
