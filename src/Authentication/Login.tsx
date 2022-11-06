import React, { useState } from 'react';
import { Button, Col, Form, Row,Alert} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../Firebase/firebase';

const SignIn = () => {
  const [err, setError] = useState("");
  const [data, setData] = useState({
   "email": "adminreact@gmail.com",
  "password": "1234567890",
  })
  const { email, password } = data;
  const changeHandler = (e:any) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setError("");
  }
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `${process.env.PUBLIC_URL}/dashboard`; 
    navigate(path);
  }

  const Login = (e:any) => {
    e.preventDefault();
    routeChange();
    auth.signInWithEmailAndPassword(email, password).then(
      user => {console.log(user);routeChange()}).catch(err => {console.log(err);setError(err.message)})
  }
  
  return (
    <React.Fragment>
      <div className="square-box"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div>
      <div className="page bg-primary">
    <div className="page-single">
      <div className="container"  style={{ marginTop: "89px" }} >
        <Row>
          <Col
            xl={5}
            lg={6}
            md={8}
            sm={8}
            xs={10}
            className="card-sigin-main mx-auto my-auto py-4 justify-content-center"
          >
            <div className="card-sigin">
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
                      <h2>Welcome back!</h2>
                      <h6 className="font-weight-semibold mb-4">
                        Please sign in to continue.
                      </h6>
                      <div className="panel panel-primary">
                        <div className=" tab-menu-heading mb-2 border-bottom-0">
                          <div className="tabs-menu1">
                            {err && <Alert variant="danger">{err}</Alert>}
                            <Form >
                              <Form.Group className="form-group">
                                <Form.Label className=''>Email</Form.Label>{" "}
                                <Form.Control
                                  className="form-control"
                                  placeholder="Enter your email"
                                  name="email"
                                  type='text'
                                  value={email}
                                  onChange={changeHandler}
                                  required
                                />
                              </Form.Group>
                              <Form.Group className="form-group">
                                <Form.Label>Password</Form.Label>{" "}
                                <Form.Control
                                  className="form-control"
                                  placeholder="Enter your password"
                                  name="password"
                                  type='password'
                                  value={password}
                                  onChange={changeHandler}
                                  required
                                />
                              </Form.Group>
                              <Button
                                variant=""
                                type='submit'
                                className="btn btn-primary btn-block"
                                onClick={Login}
                              >
                                Sign In
                              </Button>
                              
                              <div className="mt-4 d-flex text-center justify-content-center mb-2">
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
                              <div className="main-signin-footer text-center mt-3">
                              <p><Link to="#" className="mb-3">Forgot password?</Link></p>
                               <p>Don't have an account ? <Link to={`${process.env.PUBLIC_URL}/authentication/signup`} className=""> Create an Account</Link></p>
                                </div>
                            </Form>
                          </div>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div >
    </div>
</React.Fragment>
  );
}

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
