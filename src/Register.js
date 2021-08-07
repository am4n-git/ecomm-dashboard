import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
function Register() {
    const [name,setName]= useState("")
    const[password, setPassword]= useState("")
    const[email,setEmail]= useState("");
    const history= useHistory();
    async function signUp(){
        let item= {name,password, email}
        let result = await fetch('http://localhost:8000/api/register',{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result= await result.json();
        console.warn("result>>>",result)
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push("/add")
        
    }
    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Sign Up</h1>
            <input type="text" value={name} placeholder="Name" className="form-control" onChange={(e)=>setName(e.target.value)}/>
            <br />
            <input type="text" value={password} className="form-control" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <input type="text" value={email} className="form-control" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <button className="btn btn-primary" onClick={signUp}>Sign Up</button>
        </div>
    )
}

export default Register
