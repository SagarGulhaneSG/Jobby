import { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {

 const navigate = useNavigate();   
 const token = Cookies.get("jwttoken");

 const [allValues,setValues] = useState({
    userdetails:"",
    password:""
 })   

 const onSubmitUserDeatials = async(e)=>{

    e.preventDefault();

    const api = "https://apis.ccbp.in/login";
    

    const userdetails = {
        username: allValues.username,
        password: allValues.password,
        errorMsg:"",
        showErrorMsg:false
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(userdetails),
    }

    const response = await fetch(api,options);
    const data = await response.json();
   
    if(response.ok  === true){
        setValues({...allValues,errorMsg:"",showErrorMsg:false});
        Cookies.set("jwttoken",data.jwt_token)
        navigate("/");
    }
    else{
        setValues({...allValues,errorMsg:data.error_msg,showErrorMsg:true})
    }
    
 }
 const onChnageUsername=(e)=>{
    setValues({...allValues,username:e.target.value})
 }  
 const onChangePassword=(e)=>{
    setValues({...allValues,password:e.target.value})
 } 

 useEffect(()=>{
    if(token !== undefined){
        navigate("/")
    }
 },[])



    return (
        <div className="login-cont">
            <form className="my-form" onSubmit={onSubmitUserDeatials}>
                <div className="logo-cont">
                    <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="" />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChnageUsername}/>
                        
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={onChangePassword}/>
                </div>
              
                <div className="button-cont">
                <button type="submit" className="btn btn-primary button">Login</button>
                </div>
                
                {allValues.showErrorMsg ? <p className="text-danger text-center">{allValues.errorMsg}</p>:null}
            </form>
           

        </div>
    )
}

export default Login;

