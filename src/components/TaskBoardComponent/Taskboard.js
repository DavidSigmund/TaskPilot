import "./TaskBoard.css"

// components
import AddTask from "../AddTaskComponent/AddTask.js";
import Task from "../TaskComponent/Task.js";

function TaskBoard() {

    return (
        <div className="TaskBoard">
            <h1 className="text-start p-5">TaskBoard</h1>

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
                <AddTask />
                <Task />


            </div>
        </div>
    )
}

export default TaskBoard;
