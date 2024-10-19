"use client";
import React, { useState } from "react";

export const TaskMangement = ({
  handleAdd,
  update,
  task,
  settask,
  description,
  setdescription,
  priority,
  setpriority,
  isedit,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(task, description, priority);
    setdescription("");
    settask("");
    setpriority("Select Priority");
  };

  const handleUpdate = (e)=> {
    e.preventDefault()
    console.log(task, description, priority)
    update(task, description, priority)
    setdescription("");
    settask("");
    setpriority("Select Priority");
  }

  const handlePriority = (e) => {
    setpriority(e.target.value);
  };

  return (
    <div>
      <form id="form" onSubmit={isedit ? handleUpdate : handleSubmit}>
        <input
          type="text"
          id="task-input"
          value={task}
          placeholder="Add a task"
          required
          onChange={(e) => settask(e.target.value)}
        />
        <input
          type="text"
          id="description-input"
          value={description}
          placeholder="Describe the task"
          required
          onChange={(e) => setdescription(e.target.value)}
        />
        <select value={priority} onChange={handlePriority}>
          <option value="Select Priority">Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button>{isedit ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};
