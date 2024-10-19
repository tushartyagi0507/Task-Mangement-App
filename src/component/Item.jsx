import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDone } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

const Item = ({ data, handleComplete, handleDelete, handleEdit }) => {
  if (!data) return null;

  const { title, id, description, completed, priority } = data;

  const getPriorityClass = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "priority-high";
      case "medium":
        return "priority-medium";
      case "low":
        return "priority-low";
      default:
        return "";
    }
  };

  return (
    <>
      <td>{title}</td>
      <td>{description}</td>
      <td className={getPriorityClass(priority)}>{priority}</td>
      <td>{completed ? "Done" : "Pending"}</td>
      <td>
        <div className="editables">
          <span onClick={() => handleEdit(id)}>
            {" "}
            <CiEdit />
          </span>
          <span onClick={() => handleComplete(data)}>
            {" "}
            <MdOutlineDone />
          </span>
          <span onClick={() => handleDelete(id)}>
            {" "}
            <AiOutlineDelete />
          </span>
        </div>
      </td>
    </>
  );
};

export default Item;
