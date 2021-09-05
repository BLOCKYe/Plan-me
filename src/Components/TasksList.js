import React, { useContext } from "react";
import Task from "./Task";
import { TasksContext } from "./TasksContext";

function TasksList() {
  const [tasks] = useContext(TasksContext);
  return (
    <div className="tasklist">
      {tasks.map((task) => (
        <Task title={task.title} desc={task.desc} date={task.date} key={task.id} />
      ))}
    </div>
  );
}

export default TasksList;
