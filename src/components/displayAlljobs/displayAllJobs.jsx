import "./displayAllJobs.css";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa";
import { Link } from "react-router-dom";

const DisplayAllJobs =(props)=>{

    const {jobItem} = props;

    return(
        <>
        <Link className="full-cont" to={`/jobs/${jobItem.id}`}>
        <li className="job-cont">
            <div className="top">
                <img className="web-logo" src={jobItem.company_logo_url} alt="" />
                <div className="title-section">
                    <h3>{jobItem.title}</h3>
                     <FaStar className="star"/>
                    <span>{jobItem.rating}</span>
                </div>
            </div>
            <div className="middle">
                <div className="icon-text-cont">
                <FaLocationDot className="icon" />
                <span className="icon-text">{jobItem.location}</span>
                <FaSuitcase className="icon" />
                <span className="icon-text">{jobItem.employment_type}</span>
                </div>
                <h4>{jobItem.package_per_annum}</h4>
            </div>
            <h4 className="descrip">Description</h4>
            <p className="description">{jobItem.job_description}</p>
        </li>
        </Link>
        </>
    )
}

export default DisplayAllJobs;