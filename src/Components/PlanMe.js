import React from "react";
import AddTask from "./AddTask";
import Header from "./Header";
import TasksList from "./TasksList";

function PlanMe() {
  return (
    <div className="container">
      <Header />
      <AddTask />
      <TasksList />
    </div>
  );
}

export default PlanMe;
