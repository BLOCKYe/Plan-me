import React from "react";

function Header() {
  const weekDay = () => {
    let today = new Date();
    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = weekDays[today.getDay()];
    return day;
  };

  const currentDate = () => {
    let today = new Date();
    return (
      today.getFullYear() +
      "." +
      (parseInt(today.getMonth() + 1) < 10
        ? `0${parseInt(today.getMonth() + 1)}`
        : parseInt(today.getMonth() + 1)) +
      "." +
      (parseInt(today.getDate()) < 10
      ? `0${parseInt(today.getDate())}`
      : parseInt(today.getDate()))
      
    );
  };

  return (
    <div className="header">
      <div className="logo m40">Plan-me</div>
      <div className="t1 m20 ">Let's plan your miserable life!</div>
      <div className="t2 m10 o">
        {weekDay()}, {currentDate()}
      </div>
    </div>
  );
}

export default Header;
