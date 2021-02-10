import classes from './MainContent.module.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Statistics from './Statistics/Statistics';
import Profile from  './Profile/Profile';
import MapBlock from  './MapBlock/MapBlock';
import Tasker from './Tasker/Tasker';
import Chat from './Chat/Chat';

const Main = ( props ) => {    

    let users = ['Dimych','Anton', 'Vladlen', 'Lenin', 'Dasha', 'Vitalik', 'Kolia', 'Alexandr', 'Batya', 'Natasha', ' Billy', ' Darkholm', 'Jebroni', 'Master'];
    
    return(
        <div className={classes.mainWrapper}>
            <Switch>
                <Route path='/dashboard' render = {Dashboard} />
                <Route path='/profile' render = {Profile} />
                <Route path='/tasker' render = { () => < Tasker tasks={props.appState.tasks} /> } />
                <Route path='/chat' render={ () => <Chat users={users} />} />
                <Route path='/stats' render = { Statistics} />
                <Route path='/maps' render = {MapBlock} />
            </Switch>
        </div>
    )
}

export default Main;