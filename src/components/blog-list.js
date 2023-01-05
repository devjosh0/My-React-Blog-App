import React from "react";
import { useState } from "react";


//we use props here to get access to the useState in homepage.js
export default function Bloglist(props){
   return( <div className="blog-contain">    
   { props.blog.map((item)=>(
       <div className="blog-preview" key={item.id}>
           <h2>{item.title}</h2>
           <p>written by {item.author}</p>
           
       </div>
      ))} 
      
      </div>
      
      )
   
}
//The handleDelete() is call in button with parameter(item.id to access each element)