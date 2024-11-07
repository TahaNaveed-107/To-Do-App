"use client";
import Form from "../form/page";
import { useState } from "react";
import classes from "./todo.module.css";
export default function () {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn Javascript", completed: false },
    { id: 2, title: "Build to do list App", completed: false },
  ]);

  const DeleteHandler = (event) => {
    const taskId = +event.target.getAttribute("data-id");
    // const taskTitle = event.target.getAttribute("data-title");
    // const taskCompleted = event.target.getAttribute("data-completed");

    // console.log({
    //   taskId,
    //   taskTitle,
    //   taskCompleted,
    // });

    const updatedTask = tasks.filter((tasks) => tasks.id !== taskId);
    setTasks(updatedTask);
    console.log("Updated Tasks:", updatedTask);
    // tasks.pop([`${taskId - 1}`]);

    // console.log(tasks);
  };

  const addTask = (title) => {
    console.log("Adding task:", title);
    const newTask = {
      id: tasks.length + 1,
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Form onAddTask={addTask} />
      <table>
        <thead>
          <tr className={classes.tableLabels}>
            <td>Sr No.</td>
            <td>Task</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item) => (
            <tr key={item.id} className={classes.tableLabels}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed ? "Yes" : "No"}</td>
              <td>
                {/* <button onClick={() => DeleteHandler(item.id)}>Delete</button> */}
                <button
                  data-id={item.id}
                  // data-title={item.title}
                  // data-completed={item.completed}
                  onClick={DeleteHandler}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
