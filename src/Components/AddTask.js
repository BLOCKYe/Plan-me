import { motion } from "framer-motion";
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
        {
          title: title,
          desc: desc,
          date: date,
          done: false,
          id: new Date().getTime(),
        },
        ...tasks,
      ]);
      setopenModal(false);
      settitle("");
      setdesc("");
      setdate("");
    }
  };

  return (
    <div className="add">
      <motion.div
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setopenModal(!openModal)}
        className="t1 m40 addButton"
      >
        📝 Create new task
      </motion.div>

      {openModal && (
        <div className="addModal">
          <div className="t2">Create new task</div>
          <form onSubmit={addTask}>
            <input
              onChange={(e) => settitle(e.target.value)}
              value={title}
              type="text"
              className="input-title"
              placeholder="title"
            ></input>
            <textarea
              onChange={(e) => setdesc(e.target.value)}
              value={desc}
              type="text"
              className="input-desc"
              placeholder="description"
            ></textarea>
            <input
              onChange={(e) => setdate(e.target.value)}
              value={date}
              type="date"
              className="input-date"
            ></input>
            <div className="bottom-btns">
              <motion.div
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setopenModal(!openModal)}
                className="back"
              >
                Cancel
              </motion.div>
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="button"
              >
                Add task
              </motion.button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddTask;
