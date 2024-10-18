
import Header from "../header/header";
import "./home.css";
import { Link } from "react-router-dom";


const Home = () =>{
  

    return(
        <>
       
        <Header/>
      
        <div className="home-cont">
            <h1>Find The Job That Fits Your Life</h1>
            <p>Millions of peoples are searching the jobs, salary information, company reviews.Find the job that fits your ability and potential.</p>
        <Link to="/jobs"> <button className="btn btn-primary" >Find Jobs</button></Link>    
        </div>
        </>
    )
}

export default Home;