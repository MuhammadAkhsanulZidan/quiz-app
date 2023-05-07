import React from "react";

const Login=({accountVerified})=>{
    const database = [
        {
            email: "person1@mail.com",
            password: "pass1"
        },
        {
            email: "person2@mail.com",
            password: "pass2"
        }
    ]
    const handleSubmit =(event)=>{
        //prevent page being reloaded
        event.preventDefault();

        var {email, pass}=document.forms[0];

        // Find user
        const userData = database.find((user)=>user.email===email.value);
        
        // User Authentification
        if(userData){
            if(userData.password===pass.value){
                accountVerified();
            }
            else{
                console.log("Either Email or Password is wrong");
            }
        }
        else{
            console.log("Either Email or Password is wrong");
        }

    }
    return(
        <div className="login-container">
           <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label className="emailtxt" htmlFor="email">Email</label>
                    <input className="txt" type="email" placeholder="Enter Email" name="email"/>
                </div>
                <div>
                    <label className="passtxt" htmlFor="password">Password</label>
                    <input type="password" placeholder="******" name="pass"/>
                </div>
                <button className="btn login">Log in</button>
                <p></p>
            </form> 
        </div>
    )
}

export default Login