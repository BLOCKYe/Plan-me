import React, { useContext } from "react";
import Task from "./Task";
import { TasksContext } from "./TasksContext";

function TasksList() {
  const [tasks, settasks] = useContext(TasksContext);
  return (
    <div className="tasklist">
      {tasks.map((task) => (
        <Task task={task} tasks={tasks} settasks={settasks} key={task.id} />
      ))}
    </div>
  );
}

export default TasksList;
