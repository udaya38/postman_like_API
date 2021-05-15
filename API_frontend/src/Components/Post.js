import {useState} from 'react';
import './Header.css';

function Post({setjso}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const validatePost=async()=>{
    const result = await fetch("/articles", {
                method: 'post',
                body: JSON.stringify({ title:title, content:content }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const body = await result.json();
            setjso(JSON.stringify(body,null,2));
  }
  return (
    <div className="container">
      <h3>HTTP post request</h3>
      <label>Title</label>
      <br/>
      <input type="text" onChange={(e)=>setTitle(e.target.value)} name={title}/>
      <br/>
      <label>Content</label>
      <br/>
      <input type="text" onChange={(e)=>setContent(e.target.value)} name={content}/>
      <br/>
      <button onClick={()=>validatePost()}>Post</button>
      <hr/>
    </div>
  );
}

export default Post;
