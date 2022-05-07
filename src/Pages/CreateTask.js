import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField } from '@mui/material';


const validationSchema = yup.object({

    taskName: yup
        .string('Enter title')
        .min(4, 'title should be of minimum 4 characters length')
        .required('title is required'),
    taskNature: yup
        .string('Enter title')
        .min(4, 'title should be of minimum 4 characters length')
        .required('title is required'),
    description: yup
        .string('Enter your description')
        .min(4, 'description should be of minimum 30 characters length')
        .required('description is required'),
    createdBy: yup
        .string('Enter your description')
        .min(4, 'description should be of minimum 30 characters length')
        .required('description is required'),
    assignedTo: yup
        .string('Enter title')
        .min(4, 'title should be of minimum 4 characters length')
        .required('title is required'),
    status: yup
        .string('Enter your description')
        .min(4, 'description should be of minimum 30 characters length')
        .required('description is required'),
});





function CreateTask() {



    const submit = async (values) => {
        console.log(values)
    }





    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            taskName: "",
            taskNature: "",
            description: "",
            createdBy: "",
            sdate: "",
            edate: "",
            status: "",
            assignedTo: "",

        },
        onSubmit: submit
    },
    );













    return (
        <>
            <div className="container-form">
                <div className="title">
                    <h2>Create Task</h2>
                </div>
                <div className="form">
                    <form onSubmit={formik.handleSubmit}>


                        <div className="section">
                            <div className="header_title">
                                INCLUDE SOME DETAILS
                            </div>


                            <div className="input_field">
                                <label className="form-table">Task Name</label>
                                <TextField
                                    name="taskName"
                                    id="taskName"
                                    className="form-input"
                                    value={formik.values.taskName}
                                    variant="standard"
                                    onChange={formik.handleChange}
                                    error={formik.touched.taskName && Boolean(formik.errors.taskName)}
                                    helperText={formik.touched.taskName && formik.errors.taskName}
                                />

                            </div>

                            <div className="input_field">
                                <label className="form-table">Task Nature</label>
                                <TextField
                                    name="taskNature"
                                    id="taskNature"
                                    className="form-input"
                                    value={formik.values.taskNature}
                                    variant="standard"
                                    onChange={formik.handleChange}
                                    error={formik.touched.taskNature && Boolean(formik.errors.taskNature)}
                                    helperText={formik.touched.taskNature && formik.errors.taskNature}
                                />

                            </div>

                            <div className="input_field">
                                <label className="form-table">Created By</label>
                                <TextField
                                    name="createdBy"
                                    id="createdBy"
                                    className="form-input"
                                    value={formik.values.createdBy}
                                    variant="standard"
                                    onChange={formik.handleChange}
                                    error={formik.touched.createdBy && Boolean(formik.errors.createdBy)}
                                    helperText={formik.touched.createdBy && formik.errors.createdBy}
                                />

                            </div>

                            <div className="input_field">
                                <label className="form-table">Start Date</label>
                                <TextField
                                    type="date"
                                    name="sdate"
                                    id="sdate"
                                    className="form-input"
                                    value={formik.values.sdate}
                                    variant="filled"
                                    onChange={formik.handleChange}
                                // error={formik.touched.sdate && Boolean(formik.errors.sdate)}
                                // helperText={formik.touched.sdate && formik.errors.sdate}
                                />

                            </div>

                            <div className="input_field">
                                <label className="form-table">End Date</label>
                                <TextField
                                    type="date"
                                    name="edate"
                                    id="edate"
                                    className="form-input"
                                    value={formik.values.edate}
                                    variant="filled"
                                    onChange={formik.handleChange}
                                // error={formik.touched.edate && Boolean(formik.errors.edate)}
                                // helperText={formik.touched.edate && formik.errors.edate}
                                />

                            </div>

                            <div className="input_field">
                                <label className="form-table">Description</label>
                                <TextField
                                    name="description"
                                    id="description"
                                    className="textarea"
                                    multiline
                                    minRows={4}
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    variant="filled"
                                    error={formik.touched.description && Boolean(formik.errors.description)}
                                    helperText={formik.touched.description && formik.errors.description}
                                />
                            </div>



                            <div className="input_field">
                                <label className="form-table">Status</label>

                                <TextField
                                    name="status"
                                    id="status"
                                    className="form-input"
                                    value={formik.values.status}
                                    onChange={formik.handleChange}
                                    variant="standard"
                                    error={formik.touched.status && Boolean(formik.errors.status)}
                                    helperText={formik.touched.status && formik.errors.status}
                                />
                            </div>

                            <div className="input_field">
                                <label className="form-table">Assigned to</label>

                                <TextField
                                    name="assignedTo"
                                    id="assignedTo"
                                    className="form-input"
                                    value={formik.values.assignedTo}
                                    onChange={formik.handleChange}
                                    variant="standard"
                                    error={formik.touched.assignedTo && Boolean(formik.errors.assignedTo)}
                                    helperText={formik.touched.assignedTo && formik.errors.assignedTo}
                                />
                            </div>

                        </div>

                        <div className="section" id="last_section">
                            <div className="input_field">
                                <Button id="btn" variant="contained" color="success" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default CreateTask;
