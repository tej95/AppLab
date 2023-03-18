import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Radio from '../components/Radio'
import Header from '../components/header'
import Lottie from "lottie-react";
import laptopAnimation from '../components/56922-code-typing-concept.json'
// import { useForm } from "react-hook-form";
// import FormInput from "./FormInput";
// import Table from "./Table";
import '../App2.css'

import Card from "../components/Card";
import Home from "./Home";

const Compose = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [selected, setSelected] = useState("General");
  const navigate = useNavigate();

  const [tableData, setTableData] = useState([]);
  const [formInputData, setformInputData] = useState({
    category:"",
    title: "",
    content: "",
  });
//   const handlerChange=(e)=> setSelected(e.target.value)
  

  const handleChange = (evnt) => {
    console.log(evnt);
    
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value,category:selected
    });
    setformInputData(newInput);
   
    setIsChecked(false)
   
  };

  const handleSubmit = async (evnt) => {
   
    
    evnt.preventDefault();
   
    
    const response = await fetch("http://localhost:8080/test",{
      method: "POST",
      body: JSON.stringify(formInputData),
      headers:{
        "Content-Type" :"application/json"
      }
    }) ;
    const response1 = await response.json();
    console.log(response1);
    
   
    setIsChecked(false)
    const value = (data) => ({...formInputData,category:selected})
    setformInputData(value);
   
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formInputData];
      setTableData(newData);
      const emptyInput = { title: "", content: ""};
      setformInputData(emptyInput);
    }
   
   
  };
  

 
  // const { register, handleSubmit , getValues } = useForm();
  // const [data, setData] = useState([]);
  // // const [data, setData] = useState([{title: "", content: ""}])
  // // const handleChange = (e)=>{
  // //     const newInput = (data)=>([...data,{[e.target.name]:e.target.value}])
  // //     setData(newInput);

  // // }
  // const onSubmit = (e) => {console.log(e);
  // setData(data => ([...data,e]));
  // console.log(data);}

  return (
    <>
    <Header color="navColor"></Header>
    <div className='lotiDiv'>
            <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/private_files/lf30_wqypnpu5.json"
                style={{ height: '700px', width: '700px' }}
            >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>

        </div>
    {/* <div>
    <Lottie animationData={laptopAnimation} className="h-100"/>
  </div> */}
   <div className="background ml-[30rem]">
        <div className="shape mt-[5rem] ml-10" ></div>
        <div className="shape"></div> 
    </div> 
      <form onSubmit={handleSubmit}
        action="/compose"
        method="post"
        className="login_form ml-[35rem] mt-12 w-[60rem] "
      >
          <div className=" text-black flex gap-10 items-center text-md mb-10 justify-center">
        <Radio
          changed={(e)=> {setSelected(e.target.value);setIsChecked(true);}}
          
          
        //   isSelected={selected === "General"}
        
         className=""
          label="General"
           value="General"
          
        />

        <Radio
         changed={(e)=> {setSelected(e.target.value);setIsChecked(true);}}
         
        //   isSelected={selected === "Technical"}
          
          label="Technical"
          value="Technical"
         
         
        />
         <Radio
          changed={(e)=> {setSelected(e.target.value);setIsChecked(true);}}
          
        //   isSelected={selected === "Academic"}
         
          label="Academic"
          value="Academic"
         
         
        />
      </div>
        <div className="form-group m-24 mb-[-1rem] text-black">
          <label className="text-black text-2xl mb-4">Title</label>
          <input
            className="form-control text-2xl h-24 mb-24"
            type="text"
            name="title"
            value={formInputData.title}
            onChange={handleChange}
          />
          <label className="text-black  text-2xl mb-4">Post</label>
          <textarea
            className="form-control  text-2xl h-52 mb-24"
            name="content"
            id=""
            cols="70"
            rows="5"
            value={formInputData.content}
            onChange={handleChange}
          ></textarea>
          
         
        </div>
      

        <button
          className="bg-cyan-500 px-10 py-5 my-10 flex items-center justify-center text-3xl opacity-90 hover:opacity-100 hover:drop-shadow-xl rounded-3xl publish-button"
          type="submit"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </form>

      {/* <button
        type="button"
        className="ml-[40em] mt-10 px-10 py-5 flex items-center justify-center opacity-70 rounded-full text-white  bg-blue-500 hover:opacity-80 hover:drop-shadow-xl"
        onClick={redirectToHome}
      >
        Click to go to home page
      </button> */}

      {/* <div>
    <div>
        <h1></h1>
    </div>
</div> */}
      {/* <div className='h-4'>
          <p> Data: {JSON.stringify(data)}</p>
        </div> */}
      {/* <div>
    <h1>{values.title}</h1>
    <p>{values.content}</p>
</div> */}
      {/* {data.map((list=>(<div>)))} */}
    </>
  );
};

export default Compose;
