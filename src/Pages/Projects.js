import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

function Projects() {
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
                            <th>Project Nature</th>
                            <th>Status</th>
                            <th>Details</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td data-label="Project Name">aa</td>
                                <td data-label="Project Nature">aa</td>
                                <td data-label="Status">aa</td>
                                <td data-label="Details"><a href="#" className="btn">See Details</a></td>
                            </tr>

                            <tr>
                                <td data-label="Project Name">aa</td>
                                <td data-label="Project Nature">aa</td>
                                <td data-label="Status">aa</td>
                                <td data-label="Details"><a href="#" className="btn">See Details</a></td>
                            </tr>

                            <tr>
                                <td data-label="Project Name">aa</td>
                                <td data-label="Project Nature">aa</td>
                                <td data-label="Status">aa</td>
                                <td data-label="Details"><a href="#" className="btn">See Details</a></td>
                            </tr>

                            <tr>
                                <td data-label="Project Name">aa</td>
                                <td data-label="Project Nature">aa</td>
                                <td data-label="Status">aa</td>
                                <td data-label="Details"><a href="#" className="btn">See Details</a></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Projects