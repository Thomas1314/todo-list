import React from "react";

const Task = ({ task, ...props }) => {
  const ActionButton = () => (
    <div className="action-btn">
      {!task.done ? (
        <p onClick={props.doneTask}>✔️</p>
      ) : (
        <p onClick={props.returnToUnDoneTask}>X</p>
      )}
    </div>
  );

  const className = "task " + (task.done ? "task-done" : "");

  return (
    <div className={className}>
      <p>{task.title}</p>
      <ActionButton />
      <p onClick={props.deleteTask} className="action-btn">
        ❌
      </p>
    </div>
  );
};

export default Task;
