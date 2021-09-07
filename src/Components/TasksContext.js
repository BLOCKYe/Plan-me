import React, { useState, useEffect, createContext } from "react";

export const TasksContext = createContext();

export const TasksProvider = (props) => {
  const starter = [
    {
      title: "This is starter task",
      desc: "You can add, edit and delete tasks.",
      date: "2000-11-03",
      done: false,
      id: 0,
    },
    {
      title: "buy new bridge",
      desc: "budget: 400$",
      date: "2021-10-01",
      done: true,
      id: 1,
    },
    {
      title: "Rob a bank at 3pm",
      desc: "don’t let anyone see you, check new haubica",
      date: "2021-09-10",
      done: false,
      id: 3,
    },
    {
      title: "add John to contacts",
      desc: "535-443-643",
      date: "2021-09-06",
      done: true,
      id: 4,
    },
  ];

  const getLocalData = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(
    getLocalData === null ? starter : getLocalData
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TasksContext.Provider>
  );
};
