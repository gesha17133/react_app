import classes from './MainContent.module.css';
import {FaTelegramPlane} from 'react-icons/fa';
import {FaPalette} from 'react-icons/fa';
import {FaRegEye} from 'react-icons/fa';
const Header = (props) => {
    return (
        <nav className={classes.HeaderWrapper}>
            <div className={classes.leftContent}>
                <div className={classes.HeaderTitle}>{ props.title }</div>
                <ItemsUI />
            </div>
            <ItemsAccount/>
            <div className={classes.HeaderDecor_1}></div>
            <div className={classes.HeaderDecor_2}></div>
            <div className={classes.HeaderDecor_3}></div>
            <div className={classes.HeaderDecor_4}></div>
        </nav>
    )
}

const ItemsUI = () => {
    return(
        <div className={classes.IconButtons}>
            <ItemUI icon = {<FaTelegramPlane/>} />         
            <ItemUI icon = {<FaPalette/>} />         
            <ItemUI icon = {<FaRegEye/>} text="search" />         
        </div>
    );
}

const ItemUI = (props) => {
    return (
    <div className={classes.WidgetItem}>
        <a href="" className={classes.IconLink}>
            {props.icon}
        </a>
        <span className={classes.Message}> {props.text}</span>    
    </div>
    )
}

const ItemsAccount = () => {
    return(
        <div className={classes.ItemsAccount}>
            <ItemAccount item="Accont" />
            <ItemAccount item="Dropdown" />
            <ItemAccount item="Log out" />
        </div>
    )
}

const ItemAccount = (props) => {
    return(
        <div className={classes.ItemAccount}>
            <a href="">{props.item}</a>
        </div>
    )
}

export default Header;

