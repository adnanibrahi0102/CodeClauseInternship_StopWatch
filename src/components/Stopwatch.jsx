import React, { useState, useEffect } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <div className="stopwatch-container">
        <div className="stopwatch">
          <h2>StopWatch</h2>
          <div className="stopwatch-content">
            <span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
          </div>
          <div className="btn-group">
            {running ? (
              <button
                className="btn btn-stop"
                onClick={() => setRunning(false)}
              >
                Stop
              </button>
            ) : (
              <button
                className="btn btn-start"
                onClick={() => setRunning(true)}
              >
                Start
              </button>
            )}

            <button className="btn btn-reset" onClick={() => setTime(0)}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Stopwatch;
