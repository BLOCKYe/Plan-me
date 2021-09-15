import { motion } from "framer-motion";
import React, { useState } from "react";

function EditTask(props) {
  const [title, settitle] = useState(props.task.title);
  const [desc, setdesc] = useState(props.task.desc);
  const [date, setdate] = useState(props.task.date);
  const [time, settime] = useState(props.task.time);

  const EditTask = (e) => {
    e.preventDefault();
    if (title !== "") {
      const oldTasks = [...props.tasks];
      const index = oldTasks.findIndex((x) => x.id === props.task.id);
      oldTasks.splice(index, 1);
      const updatedTask = {
        title: title,
        desc: desc,
        date: date,
        time: time,
        done: props.task.done,
        id: props.task.id,
      };
      const newTasks = [updatedTask, ...oldTasks];
      props.settasks(newTasks);
      props.seteditModal(false);
    }
  };

  return (
    <div className="editModal">
      <div className="t2">Edit task</div>
      <form onSubmit={EditTask}>
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
            onClick={() => props.seteditModal(false)}
            className="back"
          >
            Cancel
          </motion.div>
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="button"
          >
            Edit task
          </motion.button>
        </div>
      </form>
    </div>
  );
}

export default EditTask;
