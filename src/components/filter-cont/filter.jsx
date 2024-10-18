import { useEffect, useState } from "react";
import "./filter.css";
import Cookies from "js-cookie";


const empTypeList = [
    {
        id: "PARTTIME",
        label: "Part Time"
    },
    {
        id: "FULLTIME",
        label: "Full Time"
    },
    {
        id: "FREELANCE",
        label: "Freelance"
    },
    {
        id: "INTERNSHIP",
        label: "Internship"
    }
];

const empSalaryRange = [
    {
        id: "1000000",
        label: "10 LPA and above"
    },
    {
        id: "2000000",
        label: "20 LPA and above"
    },
    {
        id: "3000000",
        label: "30 LPA and above"
    },
    {
        id: "4000000",
        label: "40 LPA and above"
    }
]

const Filter = (props) => {

    const {empTypeFunction} = props;

    const {packageFunction} = props;

    const [allValues, setValues] = useState({
        profileDetails: {}
    });

    const token = Cookies.get("jwttoken");

    useEffect(() => {
        const fetchFilterData = async () => {
            const api = "https://apis.ccbp.in/profile";

            const options = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const response = await fetch(api, options);
            const data = await response.json();

            if (response.ok === true) {
                setValues({ ...allValues, profileDetails: data.profile_details })
            }

        }
        fetchFilterData();
    }, [])

    

    const empTypeChange = (e) =>{

        empTypeFunction(e.target.value,e.target.checked);
    }
   

    const displayEmpType = (each) => {



        return (
            <>
                <div>
                    <li className="empElement"><input type="checkbox" className="checkEmp" id={each.id} value={each.id} onChange={empTypeChange} /> <label htmlFor={each.id}>{each.label}</label></li>
                </div>
            </>
        )

    }

    const minPackageChange =(e)=>{
        packageFunction(e.target.value);
    }

    const displaySalaryRange = (each) => {


        return (

            <>
                <li className="empElement">
                    
                    <input type="radio" name="salary" className="checkEmp" id={each.id} onChange={minPackageChange} value={each.id} /><label htmlFor={each.id}>{each.label}</label>
                </li>
            </>

        )
    }


    return (
        <>
            <div className="first-box">
                <div className="profile-cont">
                    <img className="profile-logo" src={allValues.profileDetails.profile_image_url} alt="" />
                    <h2>{allValues.profileDetails.name}</h2>
                    <p>{allValues.profileDetails.short_bio}</p>
                </div>
            </div>

            <div className="second-box">
                <h3>Type of Employment</h3>
                <ul>
                    {
                        empTypeList.map(each => (displayEmpType(each)))
                    }
                </ul>
            </div>
            <div className="third-box">
                <h3>Salary Range</h3>
                <ul>
                    {
                        empSalaryRange.map(each => (displaySalaryRange(each)))
                    }
                </ul>
            </div>
        </>
    )
}

export default Filter;