import classes from './posts.module.css';
export function Dick(props){
    return(
        <div className={classes.single_wrapper}>
            <img src={props.link} alt=""/>
            <div className={classes.info_person}>
                <p className={'awd'}>{props.fullname}</p>
                <p>{props.email}</p>
            </div>
        </div>
    )   
} 