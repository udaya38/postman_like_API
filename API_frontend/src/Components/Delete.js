import {useState} from 'react';
import './Header.css';

function Delete({setjso}) {
  const [title, setTitle] = useState('');
  const validateone=async()=>{
    const result = await fetch(`/articles/${title}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const body = await result.json();
            setjso(JSON.stringify(body,null,2));
  }
  return (
    <div className="container">
      <h3>HTTP delete request</h3>
      <label>Title name need to be deleted</label>
      <br/>
      <input type="text" onChange={(e)=>setTitle(e.target.value)} name={title}/>
      <br/>
      <button onClick={()=>validateone()}>Delete</button>
      <hr/>
    </div>
  );
}

export default Delete;
