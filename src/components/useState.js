import { useState } from "react";
function List(){
   const [car,setcolor] = useState({
    name:"bently",
    model:"3000cc",
    owner:"Josh"
   })
   return<>
   <p>Mr. {car.owner}</p>
   <button onClick={()=>setcolor('green')} className="btn">click me</button>
   </>
}
function Try1(){
    const items = [
        {name:"banab"},
    {name:"20"}
    ]
   
    return<>
 {items.map((item)=><p>{item.name}</p>)}
    </>
}
export {Try1}
export default List