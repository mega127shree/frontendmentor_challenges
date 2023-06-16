import React from 'react';
import {Link} from "react-router-dom";
import '../Styles/Style.css';
 
const Findmore = ()=>{
     
    return(
<div className="findMore">
    <div className="howwework">
        <h1>Find out more <br/>about how we work</h1>
        
    </div>
    <div className="button">
               <div><Link to="/">HOW WE WORK</Link></div>
              
     </div>    
      </div>
 
    );
}
export default Findmore;
 

    