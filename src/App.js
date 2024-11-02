import React from 'react';
import "./App.css"

// components 
import Menu from "./components/MenuComponent/Menu.js"
import TaskBoard from "./components/TaskBoardComponent/Taskboard.js"

function App() {

  return (
    <div className="App">
      <Menu></Menu>
      <TaskBoard></TaskBoard>
    </div>
  )
}

export default App;