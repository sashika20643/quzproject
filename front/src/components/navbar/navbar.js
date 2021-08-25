
import {useState, useEffect} from "react";
import { navBarData } from "./navbardata";
import './navbar.css';
import logo from './logo.svg';
import {useHistory} from 'react-router-dom';


function NavBar(){
  
  const history= useHistory();
    const [user] = useState(JSON.parse(localStorage.getItem('userInfo')));
    useEffect(()=>{
        
      if(user){
          history.push('/dashboard');
      }
          },[history,user]);
    return(
        <nav className="navbar clr">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand " href="/"> <img className=".imgs" src={logo} alt="Logo"></img> </a>
          </div>
          <ul className="nav navbar-nav navbar-right">
              {navBarData.map((item,index)=>{
                  return(
                    <li key={index} ><a className="nav-txt" href={item.redirect_path}>{item.tab_name}</a></li>
                  );
              })}
              
          </ul>
          </div>
          </nav> 
    );

}
export default NavBar;