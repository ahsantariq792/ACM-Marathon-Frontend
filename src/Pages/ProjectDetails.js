import React from 'react'
import Card from '../components/card'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ImgMediaCard from '../components/ImgMediaCard';

const BasicTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{
                minWidth: 350, [`& .${tableCellClasses.root}`]: {
                    borderBottom: "none"
                }
            }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="TableCell" align="center">Employees</TableCell>
                        <TableCell className="TableCell" align="center">Admin</TableCell>
                        <TableCell className="TableCell" align="center">Member</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                        <TableCell align="center">Ahsan Tariq</TableCell>
                        <TableCell align="center"><Button id="btn" variant="contained" color="success" type="submit">ADD AS ADMIN</Button></TableCell>
                        <TableCell align="center"><Button id="btn" variant="contained" color="primary" type="submit">ADD AS MEMBER</Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Ahsan Tariq</TableCell>
                        <TableCell align="center"><Button id="btn" variant="contained" color="success" type="submit">ADD AS ADMIN</Button></TableCell>
                        <TableCell align="center"><Button id="btn" variant="contained" color="primary" type="submit">ADD AS MEMBER</Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Ahsan Tariq</TableCell>
                        <TableCell align="center"><Button id="btn" variant="contained" color="success" type="submit">ADD AS ADMIN</Button></TableCell>
                        <TableCell align="center"><Button id="btn" variant="contained" color="primary" type="submit">ADD AS MEMBER</Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Ahsan Tariq</TableCell>
                        <TableCell align="center"><Button id="btn" variant="contained" color="success" type="submit">ADD AS ADMIN</Button></TableCell>
                        <TableCell align="center"><Button id="btn" variant="contained" color="primary" type="submit">ADD AS MEMBER</Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Ahsan Tariq</TableCell>
                        <TableCell align="center"><Button id="btn" variant="contained" color="success" type="submit">ADD AS ADMIN</Button></TableCell>
                        <TableCell align="center"><Button id="btn" variant="contained" color="primary" type="submit">ADD AS MEMBER</Button></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}


const ProjectDetails = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className='mainprojectDetals'>
                <div className='headCreateNewProject'>
                    <h1>PROJECT DETAILS</h1>
                </div>
                <div className='projectDetails'>
                    <div className='childProjectDetails'>
                        <p>Project Name: </p>
                        <p>Facebook UI</p>
                    </div>
                    <div>
                    </div>
                    <div className='headTasks'>
                        <h3>TASKS</h3>
                        <Link to="/createtask">
                            <Button id="btn" variant="contained" color="success" type="submit">
                                Create New
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className='parentCard'>
                    
                    <ImgMediaCard
                        title="Facebook UI"
                        tasknature="xyz"
                        status="done"
                        createdby="ABC"
                        lastupdated="22/02/2022"
                    />

                    <ImgMediaCard
                        title="Facebook UI"
                        tasknature="xyz"
                        status="done"
                        createdby="ABC"
                        lastupdated="22/02/2022"
                    />

                    <ImgMediaCard
                        title="Facebook UI"
                        tasknature="xyz"
                        status="done"
                        createdby="ABC"
                        lastupdated="22/02/2022"
                    />

                    <ImgMediaCard
                        title="Facebook UI"
                        tasknature="xyz"
                        status="done"
                        createdby="ABC"
                        lastupdated="22/02/2022"
                    />
                </div>

                <div className='employees'>
                    <div className='employeeslist'>
                        <h3>ADD EMPLOYEES</h3>
                    </div>
                    <div>
                        <BasicTable></BasicTable>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;