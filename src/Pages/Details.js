import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// import { baseurl } from '../core';
// import axios from 'axios';
import { Button } from '@mui/material';

export default function Details(props) {

    const [posts, setPosts] = useState([])

    return (

        <div className="container py-5">

            <div className="title">
                <h2>TASK DETAILS</h2>
            </div>

            <div className="accordion-body shadow rounded">
                <ul className="ul" style={{ listStyle: 'none' }}>
                    <li className="full"><span className="left">TASK NAME</span><span className="right">FACEBOOK UI</span>
                    </li>
                    <li className="full"><span className="left">TASK NATURE</span><span className="right"> AAA</span>
                    </li>
                    <li className="full"><span className="left">CREATED BY</span><span className="right"> ASHRAF</span>
                    </li>
                    <li className="full"><span className="left">START DATE</span> <span className="right"> 02/2/2022</span>
                    </li>
                    <li className="full"><span className="left">END DATE</span> <span className="right"> 02/2/2022 </span>
                    </li>
                    <li className="full"><span className="left">STATUS</span> <span className="right"> Done </span>
                    </li>
                    <li className="full"><span className="left">ASSIGNED TO</span>
                        <span className="right">
                            <ul>
                                <li>ashraf</li>
                                <li>ashraf</li>
                                <li>ashraf</li>
                                <li>ashraf</li>
                            </ul>
                        </span>
                    </li>

                    <li className="full"><span className="left">DESCRIPTION</span>
                    </li>

                    <div className="accordion-body" style={{ textAlign: "center" }}>
                        <p>
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                </ul>
            </div>

            <div classNameName='py-05'>
                <Button variant="contained" classNameName="productdetailbtn" color="primary">Go Back</Button>
            </div>

        </div>



    );
}