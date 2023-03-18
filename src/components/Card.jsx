import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import 'boxicons';
import '../App2.css'






function Card(props)
{
   const now = new Date().toLocaleTimeString();
    

    return <div className="myCard " data-aos="fade-up" data-aos-delay="200" data-aos-duration="700">

      <FontAwesomeIcon icon="faRegular faThumbsUp" />
       <div className="cardBody">
       <span>
      <h2 className="cardTitle flex"><span> <FontAwesomeIcon className="needPadding mb-2" icon={faCircleUser} size="2xl" /></span >{props.title}</h2><span className="needPadding mb-2">{now}</span>
    </span>
       <p className="needPadding mt-6 mb-6">{props.content}</p>
      
       <div classNames="boxicons">
       <span className="needPadding"><box-icon name='like' type='solid' className=""></box-icon></span>
       <span className="needPadding"><box-icon name='chat' type='solid' ></box-icon> </span>
       {/* <box-icon name='file-blank' type='solid' ></box-icon> */}
        </div>


      
       </div>

    </div>
}




export default Card;