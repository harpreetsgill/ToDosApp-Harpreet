import { useState } from "react";
import Header from "./components/Layout/Header";
import AddToDo from "./components/ToDos/AddToDo";
import ToDoList from "./components/ToDos/ToDoList";
import Pagination from "./components/Pagination/Pagination";

import "./App.css";

const SAMPLE_TODOS = [
  {
    id: 1,
    text: "Get some sleep.",
    status: "active",
  },
  { id: 2, text: "Eat lots of greens.", status: "active" },
  {
    id: 3,
    text: "Cream cheese pecorino babybel queso camembert de normandie cheddar ricotta rubber cheese",
    status: "done",
  },
  { id: 4, text: "Dream", status: "active" },
  { id: 5, text: "Cut the cheese caerphilly!", status: "active" },
  { id: 6, text: "Lancashire melted cheese ricotta.", status: "active" },
  {
    id: 7,
    text: "Cut the cheese parmesan cheese on toast chalk.",
    status: "active",
  },
  { id: 8, text: "Goat cheeseburger halloumi.", status: "active" },
  {
    id: 9,
    text: "Feta cheesy grin brie cheese strings monterey jack.",
    status: "active",
  },
  { id: 10, text: "Save the world!", status: "active" },
];

function App() {
  const [toDos, setToDos] = useState(SAMPLE_TODOS);

  // Pagination code from: https://github.com/bradtraversy/simple_react_pagination/blob/master/src/App.js
  const [currentPage, setCurrentPage] = useState(1);
  const toDosPerPage = 5;

  const indexOfLastPost =
    currentPage * toDosPerPage > toDos.length
      ? toDos.length
      : currentPage * toDosPerPage;
  const indexOfFirstPost =
    indexOfLastPost - toDosPerPage < 0 ? 0 : indexOfLastPost - toDosPerPage;

  // Changes the current page state
  const paginationHandler = (paginate) => {
    setCurrentPage(paginate);
  };

  const currentToDos = [];

  for (let i = indexOfFirstPost; i < indexOfLastPost; i++) {
    currentToDos[currentToDos.length] = toDos[i];
  }

  // Adds a new ToDo object to the toDos array
  const addToDoHandler = (value) => {
    setToDos((prevToDos) => [value, ...prevToDos]);
  };

  // Deletes a ToDo
  const deleteToDoHandler = (id) => {
    setToDos((prevToDos) => {
      let updatedToDos = [];

      // Loops over the existing array, returns a new array that doesn't have the passes id
      for (const item of prevToDos) {
        if (item.id !== id) {
          updatedToDos = [...updatedToDos, item];
        }
      }
      return updatedToDos;
    });
  };

  // Edits a ToDo
  const editToDoHandler = (editedValues) => {
    setToDos((prevToDos) => {
      // Updates the text property of the existing ToDo with the passed ToDo
      for (const item of prevToDos) {
        if (item.id === editedValues.id) {
          item.text = editedValues.text;
        }
      }
      return prevToDos;
    });
  };

  // Changes the status of ToDos to active/done
  const markToDoDoneHandler = ({ id, status }) => {
    setToDos((prevToDos) => {
      for (const item of prevToDos) {
        if (item.id === id) {
          item.status = status ? "active" : "done";
        }
      }
      return prevToDos;
    });
  };

  const paginationClass = currentToDos.length % 2 === 0 ? "positionUnset" : "";

  return (
    <div className="main-layout">
      <Header />
      <AddToDo onAdd={addToDoHandler} />
      <ToDoList
        data={currentToDos}
        onDelete={deleteToDoHandler}
        onEdit={editToDoHandler}
        onDone={markToDoDoneHandler}
      />
      <Pagination
        toDosPerPage={toDosPerPage}
        totalToDos={toDos.length}
        paginate={paginationHandler}
        className={paginationClass}
      />
    </div>
  );
}

export default App;
