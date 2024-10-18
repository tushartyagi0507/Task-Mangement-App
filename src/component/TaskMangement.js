"use client";
import React, { useState } from "react";

export const TaskMangement = ({handleAdd}) => {

  const [task, settask] = useState("");
  const [description, setdescription] = useState("");
  const [priority, setpriority] = useState('')


  const handleSubmit = (e)=> {
    e.preventDefault()
    // console.log("Task:", task, description, priority)
  handleAdd(task, description, priority)
  setdescription("")
  settask("")
  setpriority("Select Priority")
  }

  const handlePriority = (e)=> {
    setpriority(e.target.value)
  }
  return (
    <div>
      <form id="form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="task-input"
          value={task}
          placeholder="Add a task"
          onChange={(e) => settask(e.target.value)}
        />
        <input
          type="text"
          id="description-input"
          value={description}
          placeholder="Describe the task"
          onChange={e => setdescription(e.target.value)}
        />
        <select onChange={handlePriority}>
            <option value="Select Priority">Select Priority</option>
          <option value="High" >
            High
          </option>
          <option value="Medium" >
            Medium
          </option>
          <option value="Low" >
            Low
          </option>
        </select>
        <button>Add</button>
      </form>
      
    </div>
  );
};
