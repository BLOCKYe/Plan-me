import React, { useState, useEffect, createContext } from "react";

export const TasksContext = createContext();

export const TasksProvider = (props) => {
  const starter = {
    title: "This is starter task",
    desc: "You can add, edit and delete tasks.",
    date: "2000-11-03",
    done: false,
    id: 0,
  };

  const getLocalData = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(getLocalData === null ? [starter] : getLocalData);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TasksContext.Provider>
  );
};
