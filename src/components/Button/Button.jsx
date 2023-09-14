

function Button({children, ClickHandler}) {

  return (
    <button onClick={ClickHandler}>{children}</button>
  );
}

export default Button;
