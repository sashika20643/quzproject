import React from "react";
import SignForm from "../components/SignUp/SignForm";
import NavBar from '../components/navbar/navbar';

function SignUp(){
    return(
        <div>
            <NavBar/>
        <SignForm />
        </div>
    );
}

export default SignUp;