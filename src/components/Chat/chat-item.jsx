import { NavLink } from 'react-router-dom';
import classes from '.././MainContent.module.css';

const User = (props) => {
    return (
        <li><NavLink activeStyle={{ background: '#00acc1', color: '#fff' }} to={`/chat/${props.index}`} >{props.name}</NavLink></li>
    )
}

export default User;