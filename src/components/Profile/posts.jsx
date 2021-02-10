import classes from './posts.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Dick } from './opost';

const Posts = () =>  {

    const [data, setData] = useState({ data: [] });    
    const [count, setState] = useState(1);
    const limit = data.total_pages; 
    useEffect( () => {
        const fetchData = async () => {
        const result = await axios(
          `https://reqres.in/api/users?page=${count}`,
        );
        setData(result.data);
      };
      console.log(limit);
      console.log(count);
      fetchData();
    }, [count]);
    
    return (
      <div className={classes.rest_main_wrapper}>
        {data.data.map(item => (
          <div key={item.id}> 
            <Dick link={item.avatar} email={item.email} fullname = {`${item.first_name} ${item.last_name}`} />  
          </div>
        ))}

        <button onClick={ () => count > 1 ? setState( count - 1 ) : count  }> Back </button>
        <button onClick={ () => limit !== count ? setState( count + 1 ) : count } >Forvard</button>
      </div>
    );
}

export default Posts;