import {useState} from 'react';
import './Header.css';

function Put({setjso}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const validatePost=async()=>{
    const result = await fetch("/articles", {
                method: 'put',
                body: JSON.stringify({ title:title, content:content }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const body = await result.json();
            setjso(JSON.stringify(body));
  }
  return (
    <div className="container">
      <h3>HTTP put request</h3>
      <label>Content need to be updated for the title</label>
      <br/>
      <input type="text" onChange={(e)=>setTitle(e.target.value)} name={title}/>
      <br/>
      <label>Content</label>
      <br/>
      <input type="text" onChange={(e)=>setContent(e.target.value)} name={content}/>
      <br/>
      <button onClick={()=>validatePost()}>Put</button>
      <hr/>
    </div>
  );
}

export default Put;
