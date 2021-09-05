import React, { useState, useContext } from "react";
import { TasksContext } from "./TasksContext";

function AddTask() {
  const [tasks, settasks] = useContext(TasksContext);
  const [openModal, setopenModal] = useState(false);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [date, setdate] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (title !== "") {
      settasks([
        ...tasks,
        { title: title, desc: desc, date: date, id: tasks.length },
      ]);
      setopenModal(false);
      settitle("");
      setdesc("");
      setdate("");
    }
  };

  return (
    <div className="add">
      <div onClick={() => setopenModal(!openModal)} className="t1 m40 button">
        📝 Add new task
      </div>

      {openModal && (
        <div className="addModal">
          <div onClick={() => setopenModal(!openModal)} className="t1 m40">
            ✖️ Back to list
          </div>
          <form onSubmit={addTask}>
            <input
              onChange={(e) => settitle(e.target.value)}
              value={title}
              type="text"
              className="input-title"
              placeholder="title"
            ></input>
            <input
              onChange={(e) => setdesc(e.target.value)}
              value={desc}
              type="text"
              className="input-desc"
              placeholder="description"
            ></input>
            <input
              onChange={(e) => setdate(e.target.value)}
              value={date}
              type="date"
              className="input-date"
            ></input>
            <button className="button">Add task</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddTask;
