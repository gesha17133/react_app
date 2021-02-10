import classes from './tasker.module.css'
export default function ButtonDelete(props){
    return(
        <button className={classes.buttonInside}>{props.ico}</button>
    )
}