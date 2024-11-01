import React from 'react';
import "./App.css"

// components 
import Menu from "./components/Menu.js"
import TaskBoard from "./components/Taskboard.js"

function App() {

  return (
    <div className="App">
      <Menu></Menu>
      <TaskBoard></TaskBoard>
    </div>
  )
}

export default App;