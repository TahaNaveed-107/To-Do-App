import classes from "./mainpage.module.css";
import Todo from "../to-do/page";
export default function () {
  return (
    <>
      <h2 className={classes.heading}>To-Do App</h2>
      <Todo />
    </>
  );
}
