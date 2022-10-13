import Card from "../UI/Card";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Card className={classes.headerCard}>
      <header className={classes.header}>
        <h1>This is a To-Do list</h1>
        <nav>
          <span className={classes.label}>Active</span>
          <span className={`${classes.label} ${classes.done}`}>Done</span>
        </nav>
      </header>
    </Card>
  );
};

export default Header;
