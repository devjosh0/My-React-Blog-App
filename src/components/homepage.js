import { useState } from "react"
import Bloglist from "./blog-list"
function Home(){
    
    const [blogs,setBlogs]=useState([
        {title:'My new website',body:'lorem ipsum...',author:'mario',id:1},
        {title:'Welcome party',body:'lorem ipsum...',author:'yoshi',id:2},
        {title:'Web dev top tips',body:'lorem ipsum...',author:'kelvin',id:3},
        {title:'My new website',body:'lorem ipsum...',author:'mario',id:4},
        
    ])
    return <div className="home">
      <Bloglist blog={blogs} title="My Blogs"></Bloglist>
      
      <Bloglist blog={blogs.filter((log)=>log.author==="mario")} name="Mario Blog"/>
    </div>
}
export default Home