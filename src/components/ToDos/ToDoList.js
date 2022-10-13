import ToDoListItem from "./ToDoListItem";
import classes from "./ToDoList.module.css";

const ToDoList = (props) => {

  // Pushes a ToDo item id up
  const onDeleteHandler = (id) => {
    props.onDelete(id);
  };

  // Pushes a ToDo item up
  const onEditHandler = (values) => {
    props.onEdit(values);
  };

  // Pushed a ToDo id and its status up
  const onDoneHandler = (idAndStatus) => {
    props.onDone(idAndStatus);
  };

  const listArray = [];

  // Adds a custom ToDoListItem component to an array
  for (let i = 0; i < props.data.length; i++) {
    listArray[listArray.length] = (
      <ToDoListItem
        key={props.data[i].id}
        toDo={props.data[i]}
        onDelete={onDeleteHandler}
        onEdit={onEditHandler}
        onDone={onDoneHandler}
      />
    );
  }

  return <ul className={classes.todos}>{listArray}</ul>;
};

export default ToDoList;
