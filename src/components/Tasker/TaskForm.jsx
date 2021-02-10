
import classes from './tasker.module.css'
const FormTask = () => {
    return(
        <div className={classes.TaskGenerator}>
            <input name="title" type="text" placeholder="name"/>
        </div>
    )
} 
export default FormTask;