import React from 'react'
import Card from '../components/card'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




const BasicTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Employees</TableCell>
                        <TableCell align="center">Admin</TableCell>
                        <TableCell align="center">Member</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="center">Ahsan Tariq</TableCell>
                        <TableCell align="center"><button>ADD AS ADMIN</button></TableCell>
                        <TableCell align="center"><button>ADD AS MEMBER</button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Ahsan Tariq</TableCell>
                        <TableCell align="center"><button>ADD AS ADMIN</button></TableCell>
                        <TableCell align="center"><button>ADD AS MEMBER</button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Ahsan Tariq</TableCell>
                        <TableCell align="center"><button>ADD AS ADMIN</button></TableCell>
                        <TableCell align="center"><button>ADD AS MEMBER</button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Ahsan Tariq</TableCell>
                        <TableCell align="center"><button>ADD AS ADMIN</button></TableCell>
                        <TableCell align="center"><button>ADD AS MEMBER</button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Ahsan Tariq</TableCell>
                        <TableCell align="center"><button>ADD AS ADMIN</button></TableCell>
                        <TableCell align="center"><button>ADD AS MEMBER</button></TableCell>
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
                        <p>Project Name  </p>
                        <p> Facebook UI</p>
                    </div>
                    <div>
                        <button className='createNewTask'>CREATE NEW TASK</button>
                    </div>
                </div>
                <div className='headTasks'>
                    <h1>TASKS</h1>
                </div>
                <div className='parentCard'>

                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>

                </div>
                <div>
                    <BasicTable></BasicTable>
                </div>


            </div>
        </div>
    )
}

export default ProjectDetails;