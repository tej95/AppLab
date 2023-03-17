import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import { useForm } from "react-hook-form";
// import FormInput from "./FormInput";
// import Table from "./Table";


import Card from '../components/Card'
import Home from './Home'

const Compose = (props) => {
    const navigate = useNavigate();
   

 const [tableData, setTableData] = useState([])
 const [formInputData, setformInputData] = useState(
     {
     title:'',
    content:'',
  
    }
 );
 
 const handleChange=(evnt)=>{  
     const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
    setformInputData(newInput)
 }
  
 const handleSubmit= (evnt) =>{
     evnt.preventDefault();
     const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
     if(checkEmptyInput)
     {
      const newData = (data)=>([...data, formInputData])
      setTableData(newData);
      const emptyInput= {title:'' , content:''}
      setformInputData(emptyInput)
     }
 } 
 const redirectToHome = () => {
    navigate("/home", {
        state: tableData
    });
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
    
<form action="/compose" method="post" className='m-4 items-center justify-center' >

    <div className="form-group">

    <label className="form-label">Title</label>
    <input className="form-control" type="text" name="title" value={formInputData.title} onChange={handleChange}/>    
    <label className="form-label">Post</label>
    <textarea className="form-control" name="content" id="" cols="70" rows="5" value={formInputData.content} onChange={handleChange}></textarea>

    </div>

    <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Publish</button>
 


</form>


<button type="button" className='m-2 items-center bg-blue-500' onClick={redirectToHome}>Click to go to home page</button>

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
  )
}

export default Compose