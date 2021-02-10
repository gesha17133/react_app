import ButtonAdd from "./ButtonAdd";
import TaskAdd from "./Task-Add";
import Task from "./task-single";
import classes from "./tasker.module.css"

const TaskBoard = (props) => {
    return(
        <div className={classes.TaskBoard}>
            <ul className={classes.ListTasks} >
                {props.tasks.map(item  => {
                    return <Task index={item.id + 1} item={item.description}/>
                })}
                <TaskAdd />
                <ButtonAdd/>
            </ul>
        </div>
    )
}

export default TaskBoard;