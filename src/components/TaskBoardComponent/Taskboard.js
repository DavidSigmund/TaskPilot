import "./TaskBoard.css"

// components
import AddTaskModal from "../AddTaskModalComponent/AddTaskModal.js";
import Task from "../TaskComponent/Task.js";

function TaskBoard() {

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
                <Task />


            </div>
        </div>
    )
}

export default TaskBoard;
