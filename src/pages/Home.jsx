import React from 'react'
import Card from '../components/Card';
import Compose from './Compose'
import { useLocation, useNavigate } from "react-router-dom";

const Home = ({tableData}) => {
    const navigate = useNavigate();
    const location = useLocation();
    
  

    const info = [{
        title:" news1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolore."
      },{
        title:" news1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolore."
      }]
     
  return (<>
  {location.state.map((list)=>(<div className=' rounded-lg mb-28 bg-blue-200  p-6 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30'><h1 className='mb-5 text-3xl font-semibold'>{list.title}</h1><p className='mb-4'>{list.content}</p></div>))}
  
  
  
  
  </>
    
    
    
    
    
    
    
    
    
    
    
    )}
  





    
  


export default Home