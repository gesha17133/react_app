import classes from './Navbar.module.css';
import { useState } from "react";
import {FaArrowLeft, FaUserCog} from 'react-icons/fa';

export const Switcher = (props) => {
    const [state, setState] = useState(false)
    const ass = () => {
        setState(!state)
    }
    return (
        <button  onClick={props.switherAsideToggle} className={`${classes.w} ${classes.ToggleSidebar}  ${state ? "asSwitched" : ""}`}>  <FaArrowLeft /> </button>
    )
}