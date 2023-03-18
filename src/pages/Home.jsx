import React from "react";
import Card from "../components/Card";
import Compose from "./Compose";
import { useLocation, useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";

const Home = () => {
  const [user, setUser] = useState([]);
 

  const info = [
    {
      title: " news1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolore.",
    },
    {
      title: " news1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolore.",
    },
  ];
   const [click, setClick] = useState("");
  const handleClick=(e)=>{setClick(e.target.value)}
  console.log(click);


  const getUser = async () => { const response = await fetch("http://localhost:8080/test",{
    method: "GET",
    
  }) ;
  const data = await response.json();
  setUser(data);
 
 
    

  }

 useEffect(()=>{getUser();},[])
 
  

  return (
    <>
    <nav className="flex m-10 items-center justify-center">
      <ul className="flex gap-20">
        <button className="hover:text-cyan-500" onClick={handleClick} value="General">General</button>
        <button className="hover:text-cyan-500" onClick={handleClick} value="Technical">Technical</button>
        <button className="hover:text-cyan-500" onClick={handleClick} value="Academic">Academic</button>
       
      </ul>
    </nav>

     {/* {user.map((list)=>(<div className="gap-4">
      <div>
        <h1 className="">{list.title}</h1>
      </div>
      <div className="">
        <p>{list.content}</p>
      </div>
    </div>))}  */}
    {
        
        user.map((list) => (click===list.category && <div className=" rounded-xl mb-10 bg-[#191970] text-white p-7 m-10  ">
           <h1 className="mb-5 text-3xl font-semibold">{list.title}</h1>
           <hr />
           <p className="mt-5 text-2xl font-semibold">{list.content}</p>
          </div> ))}
    
     
            
          
        
      
      
    </>
  );
};

export default Home;
