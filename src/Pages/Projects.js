import React, { useState } from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { baseurl } from '../Core'
import { useNavigate } from 'react-router-dom'

function Projects() {
    let navigate = useNavigate();
    const [userdata, setUserdata] = useState()
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'http://localhost:7500/project/getuserproject?userId=6275614ba02cdace1c9d17aa',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.NjI3NTYxNGJhMDJjZGFjZTFjOWQxN2Fh.fTVNuh7Qk2wwWeYhE2T9MwiFFF1chM0uP3ytegPuOPQ'
            }
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
                setUserdata(() => response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        return () => {
            console.log("cleanup")
        }
    }, [])
   const toGo=(id)=>{

navigate(`/projectdetails/${id}`)
   }
    return (
        <>

            <div className="table-container">
                <div className='heading'>
                    <h4>Projects</h4>

                    <Link to="/createnewproject">
                        <Button id="btn" variant="contained" color="success" type="submit">
                            Create New
                        </Button>
                    </Link>

                </div>
                <div className="table-heading">
                    <table className="table">
                        <thead>
                            <th>Project Name</th>
                            <th>Project Key</th>
                            <th>Details</th>
                        </thead>
                        {/* navigate(`/projects/${response.data.ID}`) */}
                        <tbody>
                            {userdata?.map((post, index) => (
                               

                                <tr  key={index}>
                                    <td data-label="Project Name">{post?.projectName}</td>
                                    <td data-label="Project Key">{post?.projectKey}</td>
                                    <td data-label="Details" ><a onClick={()=>{toGo(post?._id)}} className="btn">See Details</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Projects