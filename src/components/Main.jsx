import classes from './MainContent.module.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Statistics from './Statistics/Statistics';
import Profile from  './Profile/Profile';
import MapBlock from  './MapBlock/MapBlock';
const Main = () => {
    return(
        <BrowserRouter>
            <div className={classes.mainWrapper}>
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/profile' component={Profile} />
                <Route path='/stats' component={Statistics} />
                <Route path='/maps' component={MapBlock} />
            </div>
        </BrowserRouter>
    )
}
export default Main;