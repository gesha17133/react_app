import classes from './tasker.module.css'
export default function ButtonEdit(props){
    return(
        <button className={classes.buttonInside}>{props.ico}</button>
    )
}