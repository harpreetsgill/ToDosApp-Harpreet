import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Pagination.module.css";

const Pagination = (props) => {
  const pageNumbers = [];

  // Adds the number of pages that are possible based on Total ToDos and ToDos per page
  // Code taken from: https://github.com/bradtraversy/simple_react_pagination/blob/master/src/components/Pagination.js
  for (let i = 1; i <= Math.ceil(props.totalToDos / props.toDosPerPage); i++) {
    pageNumbers[pageNumbers.length] = i;
  }

  // Adds custom Button component to an array
  // Pushes the current page up.
  let paginationButtons = [];
  for (const page of pageNumbers) {
    paginationButtons[paginationButtons.length] = (
      <Button key={page} onClick={() => props.paginate(page)}>
        {page}
      </Button>
    );
  }

  return (
    <Card className={`${classes.pagination} ${props.className}`}>
      {paginationButtons}
    </Card>
  );
};

export default Pagination;
