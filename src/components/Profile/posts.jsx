import classes from './posts.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
            <img src={item.avatar} alt=""/>
            <p>{item.first_name} {item.last_name}</p>
            
          </div>
        ))}

        <button onClick={ () => limit != count ? setState(count + 1) : count }>Forvard</button>
        <button onClick={ () => count >= 1 ? setState(count - 1 ) : count  }> Back </button>
      </div>
    );
}

export default Posts;