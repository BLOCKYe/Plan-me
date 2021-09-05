import React, { useState } from "react";
import { motion } from "framer-motion";

function Task(props) {
  const [show, setshow] = useState(false);
  const [check, setcheck] = useState(false);

  return (
    <div className={`task m20 ${check ? "o" : ""}`}>
      <motion.div
        whileTap={{ scale: .8 }}
        onClick={() => setcheck(!check)}
        className={`check ${check ? "checked" : ""}`}
      ></motion.div>
      <div onClick={() => setshow(!show)} className="title t2">
        {props.title}
      </div>
      <div className="edit">✏️</div>
      {show && (
        <motion.div
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
            delay: 0.2,
          }}
          onClick={() => setshow(!show)}
          className="extended"
        >
          <div className="desc t2 m10 o">{props.desc}</div>
          <div className="date t2 m10">{props.date}</div>
        </motion.div>
      )}
    </div>
  );
}

export default Task;
