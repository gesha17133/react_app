import Header from "../Header"
import TaskBoard from "./tasks"

const Tasker = (props) => {
    return(
    <div className="Tasker">
        <Header title='task-managment'/>
        <TaskBoard tasks={props.tasks} />
    </div>
    )
}
export default Tasker;