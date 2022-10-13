import { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddToDo = (props) => {
  const [isEmpty, setIsEmpty] = useState();
  const inputRef = useRef();

  const toDoSubmitHandler = (event) => {
    event.preventDefault();

    const inputText = inputRef.current.value;

    // Checks if textarea is empty
    if (inputText === "") {
      setIsEmpty(true);
      return;
    }

    // Pushes a random id, text and status up
    props.onAdd({
      id: Math.floor(Math.random() * 1000),
      text: inputText,
      status: "active",
    });

    // Clears the texarea and removes the empty error
    inputRef.current.value = "";
    setIsEmpty(false);
  };

  const errorClass = isEmpty && "error";

  return (
    <Card className={errorClass}>
      <form onSubmit={toDoSubmitHandler}>
        <textarea
          ref={inputRef}
          placeholder={isEmpty ? "This can't be empty" : "Write something here"}
          autoFocus={true}
          rows="4"
          maxLength="91"
        ></textarea>
        <Button type="submit">Add Item</Button>
      </form>
    </Card>
  );
};

export default AddToDo;
