import React from 'react'
import "../App.css"
import { Formik, Form } from 'formik'
import { TextField } from '../components/TextField'
import * as yup from 'yup'
import signupPic from "../images/signup.jpg"
import { baseurl } from "../Core"
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Signup = () => {

    let navigate = useNavigate();

    const submit = async (values, { resetForm }) => {

        console.log(values)
        resetForm({})

        const { email, name, password, cpassword, phone } = values

        const res = await axios.post(`${baseurl}/api/v1/signup`,
            {
                email, name, phone, password, cpassword
            }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!res) {
            console.log("Invalid registration");
        } else {
            console.log("registration completed");
            navigate("/login")

        }
    }

    const validate = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        fname: yup
            .string('Enter your password')
            .min(3, 'Name should be of minimum 3 characters length')
            .required('Name is required'),
        lname: yup
            .string('Enter your password')
            .min(3, 'Name should be of minimum 3 characters length')
            .required('Name is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
        avatar: yup
            .string('Enter your Avatar')
            .min(2, 'Avatar should be of minimum 2 characters length')
            .required('Password is required'),
    })






    return (
        <div className="container form-container my-4 shadow">
            <div className="row">
                <div className="col-md-5">
                    <Formik
                        initialValues={{
                            fname: 'Ahsan',
                            lname: 'Tariq',
                            email: 'ahsan1244@gmail.com',
                            password: '12345678',
                            cpassword: '12345678',
                            // picture: ''

                        }}
                        validationSchema={validate}
                        onSubmit={submit}
                    >
                        {formik => (
                            <div>

                                <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
                                <Form>
                                    <TextField label="First Name" name="fname" type="text"></TextField>
                                    <TextField label="Last Name" name="lname" type="text"></TextField>
                                    <TextField label="Email" name="email" type="text"></TextField>
                                    <TextField label="Password" name="password" type="password"></TextField>
                                    <TextField label="Confirm Password" name="cpassword" type="password"></TextField>
                                    {/* <TextField label="Avatar" name="picture" type="file"></TextField> */}
                                    <button className="btn btn-success mt-3 w-50 m-2" style={{ height: "40px" }} type="submit">Submit</button>
                                    <button className="btn btn-danger mt-3 w-25 m-2" style={{ height: "40px" }} type="reset">Reset</button>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </div>
                <div className="col-md-7 my-auto">
                    <img className="img-fluid w-100" style={{ height: "500px" }} src={signupPic} alt="image"></img>
                </div>
            </div>

        </div>

    )
}

export default Signup;