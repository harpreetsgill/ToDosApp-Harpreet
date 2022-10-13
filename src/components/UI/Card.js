import classes from "./Card.module.css";

const Card = (props) => {
  const styling = `${classes.card} ${props.className ? props.className : ''}`;
  return <div className={styling}>{props.children}</div>;
};

export default Card;
