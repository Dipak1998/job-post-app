import React,{useState,useEffect} from 'react'

import './JobPostCard.css';
function JobPostCard() {

    const [jobPosts, setjobPosts] = useState([]);
    useEffect(() => {
        fetch('https://jobs-api.squareboat.info/api/v1//jobs?')
        .then(response => response.json())
        .then(json => {
            const data = json
            console.log(data)
            setjobPosts(data.data);
        })
       
      },[])
      console.log(jobPosts)
    return (
        <div className="job-card">
            {
                jobPosts !== '' ? (jobPosts.map((jobPost)=>{
                    console.log(jobPost)
                    return(
                        <div className="job-card__items">
                            <div className="job-card__body">
                                <div className="job-title">{jobPost.title}</div>
                                <div className="job-details">{jobPost.description}</div>
                            </div>
                            <div className="job-card__footer"> 
                                <div className="location">
                                    <span className="location-icon"><i class="fa fa-map-marker"></i></span>
                                    <span>{jobPost.location}</span>
                                </div>
                                <div className="view__btn">
                                    <button>View Application</button>
                                </div>
                            </div>
            
                        </div>
                    )
                })  )
                : ''
            }
        </div>
        
    )
}

export default JobPostCard
