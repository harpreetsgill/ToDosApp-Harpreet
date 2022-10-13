import classes from "./Button.module.css";

const Button = (props) => {
  const styling = `${classes.button} ${props.className ? props.className : ""}`;

  return (
    <button className={styling} onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
