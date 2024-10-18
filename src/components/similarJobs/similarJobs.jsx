import "./similarJobs.css";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa6";

const SimilarJobs = (props) => {

    const { samejobs } = props;


    return (

        <li className="card">
            <div className="card-cont">
                <img src={samejobs.company_logo_url} alt="" />
                <div>
                    <h4>{samejobs.title}</h4>
                    <FaStar className="star" />
                    <span>{samejobs.rating}</span>
                </div>
            </div>
            <h4>Description</h4>
            <p>{samejobs.job_description}</p>
            <div className="loc-emp">
            <FaLocationDot className="icon" />
            <span>{samejobs.location}</span>
            <FaSuitcase className="icon"/>
            <span>{samejobs.employment_type}</span>
            </div>
        </li>

    )
}

export default SimilarJobs;