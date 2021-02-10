import classes from "./tasker.module.css"
import FormTask from "./TaskForm"

const TaskAdd = () => {
    return(
        <div className={classes.GlistWrapper}>
            <FormTask/>
        </div>
    )
}
export default TaskAdd;