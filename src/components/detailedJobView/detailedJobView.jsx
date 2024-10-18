import { useEffect, useState } from "react";
import Header from "../header/header";
import "./detailedJobView.css"
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa";
import SimilarJobs from "../similarJobs/similarJobs";

const DetailedJobView = () => {

    const { id } = useParams();

    const token = Cookies.get("jwttoken");

    const [allValues, setValues] = useState({
        jobDetail: [],
        jobskills:[],
        companyLife:{},
        similarJobsDisplay:[]
       
    },);

    useEffect(() => {

        const fetchDetailedView = async () => {
            const api = `https://apis.ccbp.in/jobs/${id}`;

            const options = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const response = await fetch(api, options);
            const data = await response.json();

            setValues({ ...allValues, jobDetail: data.job_details ,jobskills: data.job_details.skills,companyLife:data.job_details.life_at_company,similarJobsDisplay:data.similar_jobs})
           
           
            console.log(data)

        }


        fetchDetailedView();
    }, [])


    const displaySkills = (each)=>{

        return(

            <li className="list-skills">
                <img src={each.image_url} alt=""  />
                <span>{each.name}</span>
            </li>
        )
    }




    return (
        <>
            <Header />
            <div className="main-cont">
                <div className="job-details">
                    <div className="top">
                        <img className="web-logo" src={allValues.jobDetail.company_logo_url} alt="" />
                        <div className="title-section">
                            <h3>{allValues.jobDetail.title}</h3>
                            <FaStar className="star" />
                            <span>{allValues.jobDetail.rating}</span>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="icon-text-cont">
                            <FaLocationDot className="icon" />
                            <span className="icon-text">{allValues.jobDetail.location}</span>
                            <FaSuitcase className="icon" />
                            <span className="icon-text">{allValues.jobDetail.employment_type}</span>
                        </div>
                        <h4>{allValues.jobDetail.package_per_annum}</h4>
                    </div>
                    <h4>Description</h4>
                    <p className="description">{allValues.jobDetail.job_description}</p>
                    <h4>Skills</h4>
                    <ul className="skill-cont">
                        {
                            allValues.jobskills.map(each=> displaySkills(each))
                        }
                    </ul>
                    <h4>Life at Company</h4>
                    <div className="life-company-cont">
                        <div className="life-left">
                            <p>{allValues.companyLife.description}</p>
                        </div>
                        <div className="life-right">
                            <img src={allValues.companyLife.image_url} alt="" />
                        </div>
                    </div>
                </div>
                <div className="similar-jobs">
                    <h4>Similar Jobs</h4>

                    <ul className="cards">
                        {
                            allValues.similarJobsDisplay.map(each=> <SimilarJobs samejobs={each} key={each.id}   />)
                        }
                    </ul>    
                        
                </div>        
            </div>

        </>
    )
}

export default DetailedJobView;