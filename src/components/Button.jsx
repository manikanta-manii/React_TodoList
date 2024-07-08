const Button = ({ name, type }) => {
  const onClickHandler = () => {
    console.log(name);
  };
  const style = `btn btn-${type} w-75`;
  return (
    <button className={style} onClick={onClickHandler}>
      {name}
    </button>
  );
};

export default Button;
