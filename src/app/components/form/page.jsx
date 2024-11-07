import classes from "./form.module.css";
import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleAdd = () => {
    if (!newTaskTitle.trim()) return;
    onAddTask(newTaskTitle);
    setNewTaskTitle("");
  };

  return (
    <>
      <div className={classes.parent}>
        <div className={classes.taskForm}>
          Enter New Task:{" "}
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Enter new task"
          />
          <button onClick={handleAdd}>Add Task</button>
        </div>
      </div>
    </>
  );
}
