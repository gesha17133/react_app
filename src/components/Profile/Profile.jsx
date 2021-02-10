import Header from "../Header"
import  Posts  from "./posts";

const Profile = (props) => {
    
    return(
    <div className="Profile">
        <Header title='Profile' />
        <div classname='post_template_col'>
            <Posts />
        </div>
    </div>
    )
    
}
export default Profile;