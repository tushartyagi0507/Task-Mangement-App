import Head from "next/head";
import localFont from "next/font/local";
import { Data } from "../Data/tasks";
import { TaskMangement } from "@/component/TaskMangement";
import { useState } from "react";
import Item from "@/component/Item";

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
  const initialTasks = Data;

  return {
    props: { initialTasks },
  };
}

export default function Home({ initialTasks }) {
  const [Tasks, setTasks] = useState(initialTasks);
  const [task, settask] = useState("");
  const [description, setdescription] = useState("");
  const [priority, setpriority] = useState()
  const [isedit, setisedit] = useState(false)
  const [Currid, setcurrid] = useState('')
  const [text, settext] = useState('')

  const handleAdd = (task, description, priority) => {
    if (priority === "Select Priority") priority = "Low"
    setTasks((prev) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          title: task,
          description,
          priority,
          completed: false,
        },
      ];
    });
  };

  const update = (task, description, priority)=> {
    const index = Tasks.map((item)=> {return item.id}).indexOf(Currid)
    console.log(index)
    console.log("chala")
    const dummy = [...Tasks]
    console.log(task, description, priority)
    dummy[index].title = task
    dummy[index].description = description
    dummy[index].priority = priority
    setTasks(dummy)
  }
  const handleDelete = (Currid) => {
   confirm("Are you sure about deleting this task?")
    {const dummy = Tasks.filter((task) => {
      return task.id != Currid;
    });
    setTasks(dummy)}
  };

  const handleEdit = (passedId) => {
    setcurrid(passedId)
    setisedit(true)
    const dummy = Tasks.filter((element)=> element.id === passedId)
    const {title, description, priority } = dummy[0]
    //setting the fields to the selected task 
    settask(title )
    setdescription(description)
    setpriority(priority)
  }

  const handleComplete = (selectedTask) => {
    const dummy = Tasks.map((task) => {
      if (task.id === selectedTask.id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    setTasks(dummy);
  };

  return (
    <>
      <Head>
        <title>Task Manager</title>
        <meta name="description" content="Task management app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="header">Task Management App</h1>
      <TaskMangement handleAdd={handleAdd} 
      task={task} settask={settask}
      description={description} setdescription = {setdescription}
      priority = {priority} setpriority = {setpriority}
      isedit={isedit} 
      update={update}
        />
     
       <div className="search-wrapper">
       <input type="text" value={text} onChange={()=> settext(e.target.value)} className="search" placeholder="Search for the task"/>
       </div>
  
      <div className="container">
        <ul>
          {Tasks !== undefined &&
            Tasks.length > 0 &&
            Tasks.map((task, index) => {
              index += 1;
              return <Item data={task} index={index} key={task.id} 
              handleAdd={handleAdd}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              />;
            })}
        </ul>
      </div>
    </>
  );
}
