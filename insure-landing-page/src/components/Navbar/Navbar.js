import {Link} from "react-router-dom";
import '../Styles/Style.css';
import { useState } from "react";
import {Links} from "./Links"
const Navbar = () =>{
    const[isMobile,setIsMobile]=useState(false);
    return(
         <div className="header">
             <div className="homelink">
                 <h3>INSURE</h3>
             </div>
             <nav> 
                <ul className={isMobile?"nav-links-mobile":"nav-links"}>
                 {Links.map((data,index)=>{
                    return <Link key={index} to={data.to}>{data.name}</Link>
                 })
                 }
             <button className="buttonLink"><Link className="viewPlans" to="/">VIEW PLANS</Link></button>
               </ul>
      <button className="mobile-menu-icons" onClick={()=>setIsMobile(!isMobile )}>{isMobile? 
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="none" fill-rule="evenodd"><path fill="#FFF" stroke="#2C2830" stroke-width="1.5" d="M.75.75h30.5v30.5H.75z"/><g fill="#2C2830"><path d="M10.873 9.563l11.314 11.314-1.06 1.06L9.813 10.623z"/><path d="M9.813 20.877L21.127 9.563l1.06 1.06-11.314 11.314z"/></g></g></svg>:
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="none" fill-rule="evenodd"><path fill="#FFF" stroke="#2C2830" stroke-width="1.5" d="M.75.75h30.5v30.5H.75z"/><g fill="#2C2830"><path d="M8 10h16v1.5H8zM8 15h16v1.5H8zM8 20h16v1.5H8z"/></g></g></svg>
    
    }</button>
             </nav>
         </div>
    );
}
export default Navbar;