import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdOutlineDone } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

const Item = (props) => {
    if (props === undefined) return
    const{title, id, description, completed, priority} = props.data
    const {index} = props
    const {handleComplete, handleDelete, handleEdit } = props
  
  return (
    <>
         <li key={id} id="list">
          <span>{index}.</span>
          <span>{title}</span>
          <span>{description}</span>
          <span>{priority}</span>
          <span>{completed ? "Done" : "Pending"}</span>
          <div className="editables" >
        <span onClick={()=> handleEdit(id)}> <CiEdit /></span>
        <span onClick={()=> handleComplete(props.data)}> <MdOutlineDone /></span>
        <span onClick={()=> handleDelete(id)}> <AiOutlineDelete /></span>
        </div>
        </li>
    </>
  )
}

export default Item