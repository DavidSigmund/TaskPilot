import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./TaskBoard.css";

// components
import AddTaskModal from "../AddTaskModalComponent/AddTaskModal.js";
import Task from "../TaskComponent/Task.js";

function TaskBoard() {
    const [taskData, setTaskData] = useState([]);

    const getTaskData = async () => {
        const reqData = await fetch("http://localhost/TaskPilot/api/Tasks.php");
        const resData = await reqData.json();
        setTaskData(resData);
    };


    useEffect(() => {
        getTaskData();
    }, []);

    return (
        <div className="TaskBoard">

            {/* modals */}
            <AddTaskModal />

            <div className="TaskHeader">
                <h1>TaskBoard</h1>
                <button className="AddButton btn btn-primary" data-bs-toggle="modal" data-bs-target=".addTaskModal"> + </button>
            </div>

            <div className="TaskList">
                <table className="table">
                    <thead>
                        <tr className="">
                            <th scope="col">Task</th>
                            <th scope="col">Date</th>
                            <th scope="col">Priority</th>
                        </tr>
                    </thead>
                </table>

                {/* tasks */}

                {
                    taskData.map((task, index) => (
                        <Task
                            key={index}
                            task={task}
                        />
                    ))
                }


            </div>
        </div>
    )
}

export default TaskBoard;
