import React, { useState, createContext } from "react";

export const TasksContext = createContext();

export const TasksProvider = (props) => {
  const [tasks, setTasks] = useState([
    {
      title: "Make a good dinner",
      desc: "Dinner is the most important thing in life.",
      date: "2021-09-05",
      id: 1,
    },
    {
      title: "Buy a new house.",
      desc: "You can also sleep under bridge.",
      date: "2021-10-23",
      id: 0,
    },
  ]);
  const siemaaa = "siema";

  return (
    <TasksContext.Provider value={[tasks, setTasks, siemaaa]}>
      {props.children}
    </TasksContext.Provider>
  );
};
