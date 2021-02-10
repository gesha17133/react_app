import { NavLink } from 'react-router-dom';
import classes from '.././MainContent.module.css';
import Header from '../Header';
import ChatWrapp from './wrapper';

const Chat = ( props ) => {
    return(
        <div className="WrapperMain">
           <Header title="Chat" />
           <ChatWrapp users={props.users} />
        </div>
    )
} 
export default Chat;