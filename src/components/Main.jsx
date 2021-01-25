import classes from './MainContent.module.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Statistics from './Statistics/Statistics';
import Profile from  './Profile/Profile';
import MapBlock from  './MapBlock/MapBlock';
import Tasker from './Tasker/Tasker';
import Chat from './Chat/Chat';
const Main = () => {
    return(
            <div className={classes.mainWrapper}>
                <Switch>
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/tasker' component={Tasker} />
                    <Route path='/chat' component={Chat} />
                    <Route path='/stats' component={Statistics} />
                    <Route path='/maps' component={MapBlock} />
                </Switch>
            </div>
    )
}
export default Main;