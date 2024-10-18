"use client";
import React, { useState } from "react";

export const TaskMangement = () => {
  const [task, settask] = useState("");
  const [description, setdescription] = useState("");
  const [priority, setpriority] = useState('')

  const handleSubmit = (e)=> {
    console.log("working")
    e.preventDefault()
  }

  const handlePriority = (e)=> {
    console.log("priority is:", e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          placeholder="Add a task"
          onChange={(e) => settask(e.target.value)}
        />
        <input
          type="text"
          value={description}
          placeholder="Describe the task"
          onChange={e => setdescription(e.target.value)}
        />
        <select onChange={handlePriority}>
            <option >Select Priority</option>
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
