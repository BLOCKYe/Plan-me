import React, { useState } from "react";
import { motion } from "framer-motion";
import EditTask from "./EditTask";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

function Task(props) {
  const [show, setshow] = useState(false);
  const [editModal, seteditModal] = useState(false);

  const up = () => {
    const newTasks = [...props.tasks];
    const index = newTasks.findIndex((x) => x.id === props.task.id);
    if (index > 0) {
      let bufor = newTasks[index - 1];
      newTasks[index - 1] = newTasks[index];
      newTasks[index] = bufor;
      props.settasks(newTasks);
    }
  };

  const down = () => {
    const newTasks = [...props.tasks];
    const index = newTasks.findIndex((x) => x.id === props.task.id);
    if (index < newTasks.length - 1) {
      let bufor = newTasks[index + 1];
      newTasks[index + 1] = newTasks[index];
      newTasks[index] = bufor;
      props.settasks(newTasks);
    }
  };

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
          <AiFillEdit />
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
            className="extended"
          >
            <div className="desc t2 m10 o">{props.task.desc}</div>
            <div className="date t2 m10">
              {props.task.date}, {props.task.time}
            </div>
            <div className="position">
              <div onClick={() => up()} className="goTop m10">
                <AiFillCaretUp />
              </div>
              <div onClick={() => down()} className="goDown m10">
                <AiFillCaretDown />
              </div>
            </div>
          </motion.div>
        )}
        {show && (
          <div onClick={removeTask} className="del">
            <AiFillDelete />
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
