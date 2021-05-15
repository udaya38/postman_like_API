import {useState} from 'react';
import './Header.css';

function Header({setjso}) {
  const [title, setTitle] = useState('');
  const validate=async()=>{
    const result = await fetch(`/articles`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const body = await result.json();
            setjso(JSON.stringify(body,null,2));
  };
  const validateone=async()=>{
    const result = await fetch(`/articles/${title}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const body = await result.json();
            setjso(JSON.stringify(body,null,2));
  }
  return (
    <div className="container">
      <h3>HTTP get request</h3>
      <button onClick={()=>validate()}>Get All</button>
      <br/>
      <label>Title</label>
      <br/>
      <input type="text" onChange={(e)=>setTitle(e.target.value)} name={title}/>
      <button onClick={()=>validateone()}>Get one</button>
      <hr/>

    </div>
  );
}

export default Header;
