import Head from "next/head";
import localFont from "next/font/local";
import {Data} from '../Data/tasks'
import { TaskMangement } from "@/component/TaskMangement";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDone } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export async function getServerSideProps() {
  // Here I am passing the data that I get from the const Data I am using
  const initialTasks = Data

  return {
    props: { initialTasks}, 
  };
}

export default function Home({initialTasks}) {
const [Tasks, setTasks] = useState(initialTasks)


const handleAdd = (task, description, priority)=> {
  setTasks((prev)=> {
  return  [...prev, {
     id: prev.length+1,
     title: task,
     description,
     priority,
     completed: false
    }]
  })
}
   
  return (
    <>
      <Head>
        <title>Task Manager</title>
        <meta name="description" content="Task management app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="header">Task Management App</h1>
     <TaskMangement handleAdd={handleAdd}/>
     <div className="container">
      <ul >
      { Tasks !== undefined && Tasks.length > 0 && Tasks.map((task, index)=> { 
         index+=1
        return (
        <li key={task.id} id="list">
          <span>{index}.</span>
          <span>{task.title}</span>
          <span>{task.description}</span>
          <span>{task.completed ? "Done" : "Pending"}</span>
          <div className="editables" >
        <span> <CiEdit /></span>
        <span> <MdOutlineDone /></span>
        <span> <AiOutlineDelete /></span>
        </div>
        </li>
      )
      })}
      </ul>
     </div>
    </>
  );
}
