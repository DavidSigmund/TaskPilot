import "./Task.css"

function Task(props) {
    const { task, key } = props;

    return (
        <div className="Task">
            {console.log(key)}
            {console.log(task)}

            <div className="TaskContent">{task.taskContent}</div>
            <div className="TaskDate">{task.taskTargetDate}</div>
            <div className="TaskPriority">{task.taskPriority}</div>
        </div>
    );
}


export default Task;