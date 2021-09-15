import { motion } from "framer-motion";
import React, { useState, useContext } from "react";
import { TasksContext } from "./TasksContext";
import { MdAddBox } from "react-icons/md";

function AddTask() {
  const [tasks, settasks] = useContext(TasksContext);
  const [openModal, setopenModal] = useState(false);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (title !== "") {
      settasks([
        {
          title: title,
          desc: desc,
          date: date,
          time: time,
          done: false,
          id: new Date().getTime(),
        },
        ...tasks,
      ]);
      setopenModal(false);
      settitle("");
      setdesc("");
      setdate("");
      settime("");
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
        <div className="icon">
          <MdAddBox />
        </div>
        Create new task
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
            <div className="datetime">
              <input
                onChange={(e) => setdate(e.target.value)}
                value={date}
                type="date"
                className="input-date"
              ></input>
              <input
                onChange={(e) => settime(e.target.value)}
                value={time}
                type="time"
                className="input-date"
              ></input>
            </div>
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
