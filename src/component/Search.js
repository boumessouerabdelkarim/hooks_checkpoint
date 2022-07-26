import React, { useState } from "react";
import "./search.css";
function Search({ text, setText,data,setdata }) {
  const [show, setShow] = useState(false);
const [newmovie, setnewmovie] = useState({title:"",posterURL:"",description:"", url:""})
  return (
    <div>
      <div>
        <button className="button" onClick={() => setShow(!show)}>Add a new movie</button>
        {show ? (
          <div>
            <div id="form" class="topBefore">
              <input type="text" placeholder="Title" onChange={(e) => setnewmovie({ ...newmovie, title: e.target.value })} />
              <input type="text" placeholder="posterURL"  onChange={(e) => setnewmovie({ ...newmovie,posterURL : e.target.value })}/>
              <input type="text" placeholder="URL" onChange={(e) => setnewmovie({ ...newmovie, url: e.target.value })} />
              <textarea
                id="message"
                type="text"
                placeholder="description"onChange={(e) => setnewmovie({ ...newmovie, description: e.target.value })}
              ></textarea>
              <button id="submit" onClick={()=>setdata([...data,newmovie])}>
                Add a movie
              </button>
            </div>
          </div>
        ) : null}
      </div>
      <div id= "searchbox">
<input type= "text "size= "15" placeholder= "search..."  onChange={(e) => setText(e.target.value)} />

</div>
      
    </div>
  );
}

export default Search;
