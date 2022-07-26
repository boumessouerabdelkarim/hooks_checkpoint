

import MovieCard from './MovieCard';

function MovieList({text,data}) {
  
  return (
    <div>
      
       {data?.filter((el)=>el.title.toUpperCase().includes(text.toUpperCase())).map((data,i)=>(
              <MovieCard key={i} title = {data.title}
                        poster = {data.posterURL}
                        description = {data.description}
                        url= {data.url}
                />
          ))} 
    </div>
  )
}

export default MovieList