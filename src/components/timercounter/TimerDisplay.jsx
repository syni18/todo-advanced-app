import React from "react";

export default function TimerDisplay({ time, stage }) {
  const formatTime = () => {
    let minutes = Math.floor(time / 60).toString();
    let seconds = (time % 60).toString();

    const formatTime = (val) => {
      if (val.length === 1) {
        return "0" + val;
      } else {
        return val;
      }
    };

    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    return minutes + ":" + seconds;
  };
  return (
    <div className="timer__display">
      <p id="timer-label" className="timer__label">
        {stage}
      </p>
      <div id="time-left" className="timer__time-left">
        {formatTime()}
      </div>
    </div>
  );
}
