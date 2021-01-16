import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import * as axios from 'axios';

function Row({title, fetchUrl}) {
const [movies, setMovies]=useState([]);

// A snip of code which run on condition
 useEffect(()=>{
  //if [] runs once when the row loads and dont run again.
 async function fetchData() {
     const request = await axios.get(fetchUrl);
     console.log(request);
     return request;
       }
 fetchData();
 },[]);

    return (
        <div>
        {/* title */}
        <h2> {title} </h2>


        {/* container-->Poster */}
            
        </div>
    );
}

export default Row;