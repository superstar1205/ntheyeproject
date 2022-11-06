import React, { useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase"
import { Button, Col, Form, FormGroup, Row,Alert } from 'react-bootstrap';
const SignUp = () => {
    const [err, setError] = useState("");
    const [data, setData] = React.useState({
        fullname: "",
        email: "",
        password: "",
      })
      const { email, password, fullname } = data;
      const changeHandler = (e:any) => {
        setData({ ...data, [e.target.name]: e.target.value })
      }

    const Signup = (e:any) => {
        // e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(
          user =>{console.log(user);routeChange()}).catch(err => { console.log(err);setError(err.message) })
      }
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `${process.env.PUBLIC_URL}/dashboard/dashboard-1/`; 
      navigate(path);
    }
    return (
        <div>
<div className="square-box"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div>
            <div className="page bg-primary">
                <div className="page-single">
            <div className="container">
                <Row>
                    <Col
                        xl={5}
                        lg={6}
                        md={8}
                        sm={8}
                        xs={10}
                        className="card-sigin-main py-4 justify-content-center mx-auto"
                    >
                        <div className="card-sigin ">
                            {/* <!-- Demo content--> */}
                            <div className="main-card-signin d-md-flex">
                                <div className="wd-100p">
                                    <div className="d-flex mb-4">
                                        <Link to="#">
                                            <img
                                                src={require("../assets/img/brand/favicon.png")}
                                                className="sign-favicon ht-40"
                                                alt="logo"
                                            />
                                        </Link>
                                    </div>
                                    <div className="">
                                        <div className="main-signup-header">
                                            <h2 className="text-dark">Get Started</h2>
                                            <h6 className="font-weight-normal mb-4">
                                                It's free to signup and only takes a minute.
                                            </h6>
                                            {err && <Alert variant="danger">{err}</Alert>}
                                            <Form >
                                                <FormGroup className="form-group">
                                                    <label>Firstname &amp; Lastname</label>{" "}
                                                    <Form.Control
                                                        className="form-control"
                                                        placeholder="Enter your firstname and lastname"
                                                        type='text'
                                                        name='fullname'
                                                        value={fullname}
                                                        onChange={changeHandler}
                                                    />
                                                </FormGroup>
                                                <FormGroup className="form-group">
                                                    <label>Email</label>{" "}
                                                    <Form.Control
                                                        className="form-control"
                                                        placeholder="Enter your email"
                                                        type='text'
                                                        name="email"
                                                        value={email}
                                                        onChange={changeHandler}
                                                    />
                                                </FormGroup>
                                                <FormGroup className="form-group">
                                                    <label>Password</label>{" "}
                                                    <Form.Control
                                                        className="form-control"
                                                        placeholder="Enter your password"
                                                        type="password"
                                                        name="password"
                                                        value={password}
                                                        onChange={changeHandler}
                                                    />
                                                </FormGroup>
                                                <Button
                                                    variant=""
                                                    className="btn btn-primary btn-block"
                                                    onClick={Signup}
                                                >
                                                  
                                                    Create Account
                                                    
                                                </Button>
                                                
                                                <div className="mt-4 d-flex text-center justify-content-center">
                                                    <Link
                                                        to="https://www.facebook.com/"
                                                        target="_blank"
                                                        className="btn btn-icon btn-facebook me-3"
                                                        type="button"
                                                    >
                                                        <span className="btn-inner--icon">
                                                            {" "}
                                                            <i className="bx bxl-facebook tx-18 tx-prime"></i>{" "}
                                                        </span>
                                                    </Link>
                                                    <Link
                                                        to="https://www.twitter.com/"
                                                        target="_blank"
                                                        className="btn btn-icon me-3"
                                                        type="button"
                                                    >
                                                        <span className="btn-inner--icon">
                                                            {" "}
                                                            <i className="bx bxl-twitter tx-18 tx-prime"></i>{" "}
                                                        </span>
                                                    </Link>
                                                    <Link
                                                        to="https://www.linkedin.com/"
                                                        target="_blank"
                                                        className="btn btn-icon me-3"
                                                        type="button"
                                                    >
                                                        <span className="btn-inner--icon">
                                                            {" "}
                                                            <i className="bx bxl-linkedin tx-18 tx-prime"></i>{" "}
                                                        </span>
                                                    </Link>
                                                    <Link
                                                        to="https://www.instagram.com/"
                                                        target="_blank"
                                                        className="btn  btn-icon me-3"
                                                        type="button"
                                                    >
                                                        <span className="btn-inner--icon">
                                                            {" "}
                                                            <i className="bx bxl-instagram tx-18 tx-prime"></i>{" "}
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="main-signup-footer mt-3 text-center ">
                                                   <p>Already have an account?  <Link to={`${process.env.PUBLIC_URL}/authentication/login`} >Login</Link></p>
                                                </div>
                                            </Form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            </div>
            </div>
        </div>
    );
}
SignUp.propTypes = {};

SignUp.defaultProps = {};

export default SignUp;
