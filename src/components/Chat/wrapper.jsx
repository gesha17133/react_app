import classes from '.././MainContent.module.css';
import Header from '../Header';
import Users from "./users";

const ChatWrapp = (props) => {
    return (
        <div className={classes.ContentBlock}> 
            <Users users={props.users} />
        </div>  
    )
}

export default ChatWrapp;