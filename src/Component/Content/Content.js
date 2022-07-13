import React, { useState } from 'react'
import Question from './Question'
import './Content.css';
import Result from './Result';
const Content = () => {
   const [pages,setPages]= useState(1);

    function totalPages(){
        let arr= []
        for(let i=1; i<=pages;i++){
            arr.push(<Question/>)
        }
        return arr;
    }

    
  return (
<>
    <div>
    {totalPages()}
      <button onClick={()=>setPages(pages+1)}>PlusButton</button>
      <br></br>
    </div>
    <Result/>
    </>
  )
}

export default Content;


