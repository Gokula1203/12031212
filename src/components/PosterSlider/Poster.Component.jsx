import React from "react";
import { Link } from "react-router-dom";


const Poster=(props)=>{
return <Link to={`movie/${props.id}`}>
<div className="flex flex-col items-start gap-2 px-1 md:px-3">
    <div className="h-30 md:h-80">
<img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt="poster" className="h-full w-64 rounded-md" />
    </div>
<h3 className={`text-lg font-bold flex flex-col items-center ${props.isDark ? 'text-white' : 'text-black'}`}>{props.title}</h3>
</div>
</Link>
}
export default Poster;