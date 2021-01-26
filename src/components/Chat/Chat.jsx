import { NavLink } from 'react-router-dom';
import classes from '.././MainContent.module.css';
import Header from '../Header';
const Chat = () => {
    return(
        <div className="WrapperMain">
           <Header title="Chat" />
           <ChatWrapp />
        </div>
    )
} 

const ChatWrapp = () => {
    return (
        <div className={classes.ContentBlock}> 
            <Users />
        </div>  
    )
}


const Users = () => {
    let users = ['Dimych','Anton', 'Vladlen', 'Lenin', 'Dasha', 'Vitalik', 'Kolia', 'Alexandr', 'Batya', 'Natasha', ' Billy', ' Darkholm', 'Jebroni', 'Master'];
    return(
        <ul className={classes.UserLInk}>
            <div className={classes.UserListHead}>Chat</div>
            {users.map((value, index) => {
                return <User index ={index + 1 } key ={index} name={value} />
            })}
            
        </ul>
    )   
}

const User = (props) => {
    return (
        <li><NavLink activeStyle={{ background: '#00acc1', color: '#fff' }} to={`/chat/${props.index}`} >{props.name}</NavLink></li>
    )
}

export default Chat;