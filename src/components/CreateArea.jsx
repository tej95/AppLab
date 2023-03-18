import React,{useState} from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props)
{
    const [isExpanded, setExpanded] =useState(false);

    const[entry, setEntry]= useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value}= event.target;
        
        setEntry((prevEntry)=>{
            return {
                ...prevEntry,
                [name]: value
            };
        });
        
    }

    function expand()
    {
        setExpanded(true);
    }

    function handleClick(event) {
        event.preventDefault();
        props.onAdd(entry);
        setEntry({
            title: "",
            content: ""
        });
      }
    




    return (
        <div>
          <form className="create-note">
            
            {isExpanded && <input
              name="title"
              onChange={handleChange}
              value={entry.title}
              placeholder="Title"
            /> }


            <textarea
                onClick={expand}
              name="content"
              onChange={handleChange}
              value={entry.content}
              placeholder="Take a note..."
              rows= {isExpanded ? 2: 1}
            />
            <Zoom in={isExpanded}>
            <Fab onClick={handleClick}>Add</Fab>

            </Zoom>
          </form>
        </div>
      );

}

export default CreateArea;