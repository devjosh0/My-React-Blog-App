import React from "react";
import { useState } from "react";
//we use props here to get access to the useState in homepage.js
export default function Bloglist({blog,name}){

    return (
        
        <div className="blog-contain">
            <h2 className="props">{name}</h2>
        {blog.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
            </div>
           ))}
           </div>
    )
   
}