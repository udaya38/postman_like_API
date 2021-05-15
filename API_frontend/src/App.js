import Header from './Components/Header';
import Post from './Components/Post';
import Put from './Components/Put';
import Delete from './Components/Delete';
import {useState} from 'react';
import './App.css';
function App() {
  const [jso,setJso]=useState("See the response here!!!");
  return (
    <div className="row">
      <div className="column high">
        <div className="jsons">
          <Header setjso={setJso}/>
        </div>
        <div className="jsons">
          <Post setjso={setJso}/>
        </div>
        <div className="jsons">
          <Put setjso={setJso}/>
        </div>
        <div className="jsons">
          <Delete setjso={setJso}/>
        </div>
      </div>
      <div className="column stat">
        <div className='pre'>
        <pre >
          {jso}
        </pre>
        </div>

      </div>
    </div>
  );
}

export default App;
