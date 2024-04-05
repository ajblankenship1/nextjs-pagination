'use client'
import React from "react";
import { useState } from "react";
import cities from "./data/cities";





export default function Home() {
  const [pageNumber, setPageNumber] = useState(0);
  let arrayOfChunks = [];

  function CreatePageNavigation(){
    return (
   <p>{(pageNumber)+1} of {arrayOfChunks.length} </p>)
   ;
  }

  function DisplayCityList(){
    arrayOfChunks = [];
    console.log(arrayOfChunks);
    for (let i = 0; i < cities.length ; i += 5){
      const chunk = cities.slice(i , i + 5);
      arrayOfChunks.push(chunk);
    }
    return arrayOfChunks[pageNumber].map((city, index)=>{
      return <li key={index}>{city}</li>
    });
  
  }

  function handleNextClick(){
    if(pageNumber === ((arrayOfChunks.length)-1)){
      setPageNumber(0);
    }else{
    setPageNumber((pageNumber+1));
    }
  }

  function handlePreviousClick(){
      
    if (pageNumber === 0){
      
      setPageNumber((arrayOfChunks.length)-1);
    }else{
    setPageNumber((pageNumber -1));
    }
  }
 
  

  
  return (
    <main>
      <h1>Lists of Cities</h1>
      <ul className="cityDisplay">
        <DisplayCityList/>
      </ul>
      <div className="navBar">
        <button onClick={handlePreviousClick}>Previous</button>
        <CreatePageNavigation/>
        <button onClick={handleNextClick}>Next</button>
     </div>
    </main>
  );
}
