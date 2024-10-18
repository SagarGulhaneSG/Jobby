import Filter from "../filter-cont/filter";
import DisplayAllJobs from "../displayAlljobs/displayAllJobs";
import "./jobs.css";
import Header from "../header/header";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Jobs =() =>{

    const token = Cookies.get("jwttoken");

   

    const [allValues,setValues] = useState(
        {
            jobsList : [],
            userInput:"",
            minPackage:"",
            empTypeList:[],
            setLoader:false
        },
        
            
        
        
    );
    

    useEffect(()=>{
        const fetchJobsData = async()=>{

        const api = `https://apis.ccbp.in/jobs?employment_type=${allValues.empTypeList}&minimum_package=${allValues.minPackage}&search=${allValues.userInput}`;

        const options = {
            method : 'GET',
            headers : {
                Authorization : `Bearer ${token}`
            }
        }
        const response = await fetch(api,options);
        const data = await response.json();
        
        if(response.ok === true){
            setValues({...allValues,jobsList:data.jobs,setLoader:false})
        }

        }
       

        
        fetchJobsData();
        

    },[allValues.userInput,allValues.empTypeList,allValues.minPackage])
    
    const displayJobSearch = (e) =>{
          
       
           if (e.key === "Enter") {
            setValues({...allValues,userInput:e.target.value}) 
           }
        
         
    }

    const onChangeEmpTypeList =(value,isChecked)=>{
        

        if(isChecked === true){
            setValues({...allValues,empTypeList:[...allValues.empTypeList,value]})
        }
        else{
            setValues({...allValues,empTypeList:allValues.empTypeList.filter(each => each !== value)})
        }
    }
    
    const onChangeMinPackage = (value) =>{
        setValues({...allValues,minPackage:value})
       
        
    }

    return(
        <>
        <Header/>
        <div className="jobs-cont-main">
            <div className="filter-cont">
                <Filter empTypeFunction = {onChangeEmpTypeList} packageFunction = {onChangeMinPackage}/>
            </div>



        
           
            <div className="all-jobs">
                <input type="text" className="searchBox" placeholder="Search Jobs" onKeyUp={displayJobSearch} />
                <ul>
                {allValues.jobsList.map(each => <DisplayAllJobs jobItem={each} key={each.id} />)}
                </ul>
            </div>
        </div>
        
        </>
    )
}

export default Jobs;