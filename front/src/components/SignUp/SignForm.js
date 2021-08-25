
import SAnimiation from "./sAnimation";
import './SignForm.css';
import { FaGoogle,FaFacebookF, FaGithub } from "react-icons/fa";
import axios from 'axios';
import {useState} from 'react';


document.addEventListener("DOMContentLoaded", function(event) { 
   if(window.location.pathname==="/Login"){
      ShowLogin();

   }
 
  });

function ShowSign(){
    const signU=document.getElementById("SignF");
    const login=document.getElementById("LogF");
    const SignB=document.getElementById("SignB");
    const LogB=document.getElementById("LogB");
signU.style.display="block";
login.style.display="none";
SignB.style.backgroundColor="#17E741";
LogB.style.backgroundColor="#2B2D42";

}
function ShowLogin(){
    const signU=document.getElementById("SignF");
    const login=document.getElementById("LogF");
    const SignB=document.getElementById("SignB");
    const LogB=document.getElementById("LogB");
    signU.style.display="none";
    login.style.display="block";
    SignB.style.backgroundColor="#2B2D42";
LogB.style.backgroundColor="#17E741";
    
    }

function createAcc(e){
    e.preventDefault();
var request={
    email:document.getElementById("email").value,
    password:document.getElementById("pw").value,
    first_name:document.getElementById("fname").value,
    last_name:document.getElementById("lname").value
};
axios.post('http://localhost:8070/user/add',request).then
(resp=>{
    alert(resp.data.massage);
}).catch(err=>{
    console.log(err);
})
}



function SignForm(){

    const [email,setemail]= useState("")
    const [password, setpassword] = useState("");


    const login=async(e)=>{
        e.preventDefault();
        try {
            const config = {
                headers: {
                  "Content-type": "application/json",
                },
              };
          
            const {data}=await axios.post('http://localhost:8070/user/login',{email,password},config)
            
            console.log(data);
                localStorage.setItem('userInfo',JSON.stringify(data));
                window.location.replace("/login");
            
        } catch (err) {
            alert(err.response.data.massage);
        }
    
       
        
    }

    
    return(
        <div className="Smain">
        <div className="signfc">
            <div className="tgbtn"><button className="SignB" id="SignB" onClick={ShowSign}>Sign Up</button>  <button className="LogB" id="LogB" onClick={ShowLogin}>Login</button></div>
        <form className="SignF" id="SignF" onSubmit={(e)=>createAcc(e)}>
        
            <input type="text" name="email" id="email" className="Ityp1" placeholder="Email" required />
            <input type="password" name="pw" id="pw" className="Ityp1" placeholder="password" required/>
            <div className="Nsec">
            <input type="text" name="fname" id="fname" className="Ityp2" placeholder="First Name" required/>
            <input type="text" name="lname" id="lname" className="Ityp2" placeholder="Last Name" required />
            </div>
            <div className="icoset">
            <FaGoogle className='scico' /> <FaFacebookF className='scico'/> <FaGithub className='scico'/> <br></br>
            </div>
            <button type="submit" className="fb1" >Sign Up</button>
        </form>
        <form className="LogF" id="LogF" onSubmit={(e)=>login(e)}>
            <input type="text" name="email" id="emaill" onChange={(e)=>setemail(e.target.value)} className="Ityp1" placeholder="Email" required/>
            <input type="password" name="pw" id="pwl" className="Ityp1" onChange={(e)=>setpassword(e.target.value)} placeholder="password" required />
            <div className="icoset">
            <FaGoogle className='scico' /> <FaFacebookF className='scico'/> <FaGithub className='scico'/> <br></br>
            </div>
           
            <button type="submit" className="fb1" >Login</button>
        </form>
    </div>
    <div className='simg'>
        <SAnimiation />
    </div>
    </div>
  
    );

}
export default SignForm;