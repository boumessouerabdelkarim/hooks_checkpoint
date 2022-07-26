
import { useState } from 'react';
import './App.css'
import MovieList from './component/MovieList';
import Search from './component/Search';
import { Datas } from './component/Datas';

function App() {
  const [data, setData] = useState(Datas)
  const [text, setText] = useState("")
 
  return (
    <div className="App container">
    
    <Search text={text} setText={setText} data={data} setdata={setData} />
    <MovieList data={data} text={text} /> 
    
      
    </div>
  );
}

export default App;
