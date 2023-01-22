import { useState,useEffect } from "react"
import Bloglist from "./blog-list"

function Home(){
    //useState
    const [blog,setBlogs]=useState([]);
    //loading
    const[load,setLoad]=useState(true)
   useEffect(()=>{
    ///this fetch will fetch us the data using the API below
    setTimeout(()=>{
      fetch("http://localhost:8000/blog")
      .then(response=>response.json())
      .then(json=>setBlogs(json))
      ///this catch  will handle server error
  .catch(err=>{
    console.log(err.message)
     })
     //loading stops after fetch data
      setLoad(false)

    },1000)

   })
    
    return <div> 
      {load&&<h1>loading...</h1>}
      <Bloglist blog={blog}/>
    
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