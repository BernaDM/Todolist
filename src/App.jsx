import React, { useEffect, useState } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Tasks from "./components/Tasks";
import AddItem from "./components/Additem";
import Header from "./components/Header";
import Detalis from "./components/ItemDetalis";
import './App.css';

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      tittle: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      tittle: 'Ler Livros',
      completed: true,
    },
  ])

  // useEffect(() => {
  //   const fatchTasks = async () => {
  //     const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=5')
  //     setTasks(data)
    
  //   }
  //   fatchTasks()
  // }, [])

  const handleTaskId = (taskId) => {
    const newTasks = tasks.map(item => {
      if (item.id === taskId) return { ...item, completed: !item.completed }
      return item;
    })

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTittle) => {
    const newTasks = [...tasks, {
      tittle: taskTittle,
      id: uuidv4(),
      completed: false
    }]

    setTasks(newTasks)
  }
  const handleTaskDelition = (taskId) => {
    const newTasks = tasks.filter(item => item.id !== taskId)

    setTasks(newTasks)
  }

  return (

    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" exact element={
            <>
              <AddItem handleTaskAddition={handleTaskAddition} />
              <Tasks tasks={tasks} handleTaskId={handleTaskId}
                handleTaskDelition={handleTaskDelition}
              />
            </>
          }
          />

          <Route path="/:taskTittle" element={<Detalis />} />
        </Routes>

      </div>
    </BrowserRouter>

  )

}

export default App