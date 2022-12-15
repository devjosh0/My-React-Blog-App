import { useState } from "react"
import Bloglist from "./blog-list"
function Home(){
    //useState
    const [blogs,setBlogs]=useState([
        {title:'My new website',body:'lorem ipsum...',author:'mario',id:1},
        {title:'Welcome party',body:'lorem ipsum...',author:'yoshi',id:2},
        {title:'Web dev top tips',body:'lorem ipsum...',author:'kelvin',id:3},
        {title:'My new website',body:'lorem ipsum...',author:'mario',id:4},
        
    ])
    const handleDelete = (id)=>{
    const del = blogs.filter(blog=>blog.id !== id);
    setBlogs(del)
    }
    return <div className="home">
      
      <Bloglist blog={blogs} title="My Blogs" handleDelete={handleDelete}></Bloglist>
      
      <Bloglist blog={blogs.filter((log)=>log.author==="mario")} title="Mario Blog"/>
    </div>
}
//On line 15 we filter the array
export default Home