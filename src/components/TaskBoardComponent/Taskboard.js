import "./TaskBoard.css"

// components
import AddTask from

    function TaskBoard() {

        return (
            <div className="TaskBoard">
                <h1 className="text-start p-5">TaskBoard</h1>
                <div className="TaskList p-4 ">
                    <table className="table">
                        <thead>
                            <tr className="">
                                <th scope="col">Task</th>
                                <th scope="col">Date</th>
                                <th scope="col">Priority</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                {/* tasks */}

            </div>
        )
    }

export default TaskBoard;
