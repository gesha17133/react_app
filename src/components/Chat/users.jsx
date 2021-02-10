import User from "./chat-item";
import classes from '.././MainContent.module.css';

const Users = (props) => {
    return(
        <ul className={classes.UserLInk}>
            <div className={classes.UserListHead}>Chat</div>
            {props.users.map((value, index) => {
                return <User index ={index + 1 } key ={index} name={value} />
            })}
            
        </ul>
    )   
}

export default Users;