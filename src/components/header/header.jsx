import "./header.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Header=()=>{

    const navigate = useNavigate();
    
    const logout=()=>{
         Cookies.remove("jwttoken");
         navigate("/login");
 
    }

    return(
        <>
        <header className="navbar">
           <Link to="/">
                <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png   " alt="" />
           </Link>
        
        <ul className="list">
           <Link to="/"><li>Home</li></Link> 
            <Link to="/jobs"><li>Jobs</li></Link>
        </ul>
        <button className="btn btn-primary" onClick={logout}>Logout</button>
       </header>
        </>
    )
}

export default Header;