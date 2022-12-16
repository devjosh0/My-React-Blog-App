import { useState } from "react"
import Bloglist from "./blog-list"
function Home(){
    //useState
    const [blogs,setBlogs]=useState([
        {title:'My new website',body:'lorem ipsum...',author:'mario',id:1},
        {title:'Welcome party',body:'lorem ipsum...',author:'yoshi',id:2},
        {title:'Web dev top tips',body:'lorem ipsum...',author:'kelvin',id:3},
        {title:'My new website',body:'lorem ipsum...',author:'mario',id:4}
        
        
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
//We first created an array using useState that contain three objects.
//We printed it using map(), but we created it as a function in blog-list.js, where we use props to access our useState

//Now we filter the array that have mario
//On line 20 we filter the array


//To delete
//we created a function name handleDelete, that accept one parameter(id)
//We created a filter
//NOW REMEMBER
//Whenever filter() is false its delete that element.
//On line 13
//We pass it into setBlog()

//We pass the handleDelete() as props on line 18
//

export default Home