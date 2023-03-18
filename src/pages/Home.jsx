import React from "react";
import Card from "../components/Card";
import Compose from "./Compose";
import Header from '../components/header'
import { useLocation, useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';


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
    <Header color={undefined}></Header>
    
    <nav className="flex mt-[-3rem] ml-[54rem] ">
      <ul className="flex gap-28">
        <button className="hover:text-white bg-transparent text-3xl" onClick={handleClick} value="General">General</button>
        <button className="hover:text-white  bg-transparent text-3xl" onClick={handleClick} value="Technical">Technical</button>
        <button className="hover:text-white bg-transparent text-3xl" onClick={handleClick} value="Academic">Academic</button>
       
      </ul>
    </nav>
    <div className="topDiv"></div>

        <h1 id="icheading"> INNOVATION CENTER</h1>

     {/* {user.map((list)=>(<div className="gap-4">
      <div>
        <h1 className="">{list.title}</h1>
      </div>
      <div className="">
        <p>{list.content}</p>
      </div>
    </div>))}  */}
    <div className="mt-[30rem]">



    {
        
        user.map((list) => (click===list.category &&   <Card title={list.title} content={list.content}/>))}
        
       
         
    
     
            </div>
          
        
      
      
    </>
  );
};

export default Home;
