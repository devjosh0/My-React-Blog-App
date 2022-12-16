import React, { useState } from "react";
export default function Hub(){
    const [list,setList]=useState([
        {title:'My new website',body:'lorem ipsum...',author:'mario',id:1},
        {title:'Welcome party',body:'lorem ipsum...',author:'yoshi',id:2},
        {title:'Web dev top tips',body:'lorem ipsum...',author:'kelvin',id:3},
        {title:'My new website',body:'lorem ipsum...',author:'mario',id:4}
    ])
    const handledel = (id) =>{
        const del = (list.filter((item) => item.id !== id))
        setList(del)
    };
    return <div className="page">
        {list.map((item)=>(
        <p key={item.id}>
            <p>{item.title}</p>
            <p>{item.author}</p>
            <button onClick={()=>handledel(item.id)}>Delete</button>
            </p>))}
    </div>
}