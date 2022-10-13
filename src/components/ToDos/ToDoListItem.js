import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./ToDoListItem.module.css";

const ToDoListItem = (props) => {
  const inputRef = useRef();
  const [editToggle, setEditToggle] = useState(false);
  const [isEmpty, setIsEmpty] = useState();

  // Sets the default state based on the ToDos status property
  const [markDone, setMarkDone] = useState(
    props.toDo.status === "done" ? true : false
  );

  // // Pushes a ToDo item id up
  const itemDeleteHandler = () => {
    props.onDelete(props.toDo.id);
  };

  // Toggles an Edit Form
  const editFormHandler = () => {
    setEditToggle(true);
  };

  // Pushes a ToDo id and edited text up
  const itemEditHandler = (event) => {
    event.preventDefault();
    const inputText = inputRef.current.value;

    // Checks if textarea is empty, throws error if it is
    if (inputText === "") {
      setIsEmpty(true);
      return;
    }

    props.onEdit({ id: props.toDo.id, text: inputText });

    // Turns Edit Form off
    setEditToggle(false);
    setIsEmpty(false);
  };

  // Pushed a ToDo id and its status up
  const itemMarkDoneHandler = () => {
    setMarkDone((prevState) => !prevState);
    props.onDone({ id: props.toDo.id, status: markDone });
  };

  // Styles and changes the button's text content
  const paraClasses = markDone ? "done" : "active";
  const markText = markDone ? "Mark Undone" : "Mark Done";

  const listTextContent = (
    <Card>
      <p className={paraClasses}>{props.toDo.text}</p>{" "}
      <div className={classes.actions}>
        <Button onClick={editFormHandler}>Edit</Button>{" "}
        <Button onClick={itemDeleteHandler}>Delete</Button>{" "}
        <Button onClick={itemMarkDoneHandler}>{markText}</Button>
      </div>
    </Card>
  );

  const errorClass = isEmpty && "error";

  return (
    <li>
      {!editToggle && listTextContent}

      {editToggle && (
        <Card className={errorClass}>
          <form onSubmit={itemEditHandler}>
            <textarea
              defaultValue={props.toDo.text}
              ref={inputRef}
              placeholder={
                isEmpty ? "This can't be empty" : "Write something here"
              }
              autoFocus={true}
              rows="4"
              maxLength="91"
            ></textarea>
            <div className={classes.actions}>
              <Button type="submit">Update</Button>
            </div>
          </form>
        </Card>
      )}
    </li>
  );
};

export default ToDoListItem;
