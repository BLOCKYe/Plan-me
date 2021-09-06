import React, { useState } from "react";
import { motion } from "framer-motion";
import EditTask from "./EditTask";

function Task(props) {
  const [show, setshow] = useState(false);
  const [editModal, seteditModal] = useState(false);

  const markAsDone = () => {
    const newTasks = [...props.tasks];
    const index = newTasks.findIndex((x) => x.id === props.task.id);
    newTasks[index].done = !newTasks[index].done;
    props.settasks(newTasks);
  };
  const removeTask = () => {
    const newTasks = [...props.tasks];
    const index = newTasks.findIndex((x) => x.id === props.task.id);
    newTasks.splice(index, 1);
    props.settasks(newTasks);
  };

  return (
    <div>
      <div className={`task m20 ${props.task.done ? "o" : ""}`}>
        <motion.div
          onClick={markAsDone}
          whileTap={{ scale: 0.8 }}
          className={`check ${props.task.done ? "checked" : ""}`}
        ></motion.div>

        <div onClick={() => setshow(!show)} className="title t2">
          {props.task.title}
        </div>

        <div onClick={() => seteditModal(true)} className="edit">
          ✏️
        </div>

        {show && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 460,
              damping: 30,
              delay: 0.1,
            }}
            onClick={() => setshow(!show)}
            className="extended"
          >
            <div className="desc t2 m10 o">{props.task.desc}</div>
            <div className="date t2 m10">{props.task.date}</div>
          </motion.div>
        )}
        {show && (
          <div onClick={removeTask} className="del">
            ❌
          </div>
        )}
      </div>
      {editModal && (
        <EditTask
          task={props.task}
          editModal={editModal}
          seteditModal={seteditModal}
          tasks={props.tasks}
          settasks={props.settasks}
        />
      )}
    </div>
  );
}

export default Task;
