import { FaPen,FaTrashAlt } from "react-icons/fa";
import ButtonDelete from "./ButtonDelete";
import ButtonEdit from "./ButtonEdit";
import classes from "./tasker.module.css"

const Task = (props) => {
    return(
        <li  key={ props.id } className={classes.ItemSingle} >{ props.item } <div className={classes.Actions}><ButtonEdit ico={<FaPen/>}/> <ButtonDelete ico={<FaTrashAlt/>} /> </div></li>
    )
}
export default Task;