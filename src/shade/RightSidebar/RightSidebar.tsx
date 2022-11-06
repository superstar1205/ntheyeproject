import React from "react";
import { Link } from "react-router-dom";
import {Tab, Nav } from "react-bootstrap";
import Scrollbars from "react-custom-scrollbars";
export default function RightSidebar() {
  function Remove() {
    document.querySelector(".sidebar-right")?.classList.remove("sidebar-open");
  }
  return (
    <div>
      <div className="sidebar sidebar-right sidebar-animate">
        <div className="panel panel-primary card mb-0 box-shadow">
          <div className="tab-menu-heading card-img-top-1 border-0 p-3">
            <div className="card-title mb-0">Notifications</div>
            <div className="card-options ms-auto">
              <Link to="#" className="sidebar-remove" onClick={() => Remove()}>
                <i className="fe fe-x"></i>
              </Link>
            </div>
          </div>
          <div className="panel-body tabs-menu-body latest-tasks p-0 border-0">
            <div className="tabs-menu ">
              <Tab.Container id="left-tabs-example" defaultActiveKey="side1">
                <Nav className="panel-tabs" variant="">
                  <Nav.Item>
                    <Nav.Link eventKey="side1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="side-menu__icon"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
                      </svg>
                      {"  "}
                      Chat
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="side2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        className="side-menu__icon"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <g>
                          <path d="M0,0h24v24H0V0z" fill="none"></path>
                        </g>
                        <g>
                          <path d="M12,18.5c0.83,0,1.5-0.67,1.5-1.5h-3C10.5,17.83,11.17,18.5,12,18.5z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10 c5.52,0,10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8c4.41,0,8,3.59,8,8S16.41,20,12,20z M16,11.39 c0-2.11-1.03-3.92-3-4.39V6.5c0-0.57-0.43-1-1-1s-1,0.43-1,1V7c-1.97,0.47-3,2.27-3,4.39V14H7v2h10v-2h-1V11.39z M14,14h-4v-3 c0-1.1,0.9-2,2-2s2,0.9,2,2V14z"></path>
                        </g>
                      </svg>
                      {"  "}
                      Notifications
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="side3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                        className="side-menu__icon"
                        height="24"
                        version="1.1"
                        width="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11C11.17,11 10.5,10.33 10.5,9.5C10.5,8.67 11.17,8 12,8C12.83,8 13.5,8.67 13.5,9.5C13.5,10.33 12.83,11 12,11Z" />
                      </svg>
                      {"  "}
                      Friends
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                 
                  <Tab.Pane eventKey="side1" className="side1">
                    <Scrollbars style={{ height:"800px" }}>
                    <div className="tab-pane" id="side1">
                      <div className="list d-flex align-items-center border-bottom p-3">
                        <div className="">
                          <span className="avatar bg-primary brround avatar-md">
                            CH
                          </span>
                        </div>
                        <Link className="wrapper w-100 ms-3" to="#">
                          <p className="mb-0 d-flex ">
                            <b>New Websites is Created</b>
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <i className="mdi mdi-clock text-muted me-1 tx-11"></i>
                              <small className="text-muted ms-auto">
                                30 mins ago
                              </small>
                              <p className="mb-0"></p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="list d-flex align-items-center border-bottom p-3">
                        <div className="">
                          <span className="avatar bg-danger brround avatar-md">
                            N
                          </span>
                        </div>
                        <Link className="wrapper w-100 ms-3" to="#">
                          <p className="mb-0 d-flex ">
                            <b>Prepare For the Next Project</b>
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <i className="mdi mdi-clock text-muted me-1 tx-11"></i>
                              <small className="text-muted ms-auto">
                                2 hours ago
                              </small>
                              <p className="mb-0"></p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="list d-flex align-items-center border-bottom p-3">
                        <div className="">
                          <span className="avatar bg-info brround avatar-md">
                            S
                          </span>
                        </div>
                        <Link className="wrapper w-100 ms-3" to="#">
                          <p className="mb-0 d-flex ">
                            <b>Decide the live Discussion</b>
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <i className="mdi mdi-clock text-muted me-1 tx-11"></i>
                              <small className="text-muted ms-auto">
                                3 hours ago
                              </small>
                              <p className="mb-0"></p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="list d-flex align-items-center border-bottom p-3">
                        <div className="">
                          <span className="avatar bg-warning brround avatar-md">
                            K
                          </span>
                        </div>
                        <Link className="wrapper w-100 ms-3" to="#">
                          <p className="mb-0 d-flex ">
                            <b>Meeting at 3:00 pm</b>
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <i className="mdi mdi-clock text-muted me-1 tx-11"></i>
                              <small className="text-muted ms-auto">
                                4 hours ago
                              </small>
                              <p className="mb-0"></p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="list d-flex align-items-center border-bottom p-3">
                        <div className="">
                          <span className="avatar bg-success brround avatar-md">
                            R
                          </span>
                        </div>
                        <Link className="wrapper w-100 ms-3" to="#">
                          <p className="mb-0 d-flex ">
                            <b>Prepare for Presentation</b>
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <i className="mdi mdi-clock text-muted me-1 tx-11"></i>
                              <small className="text-muted ms-auto">
                                1 days ago
                              </small>
                              <p className="mb-0"></p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="list d-flex align-items-center border-bottom p-3">
                        <div className="">
                          <span className="avatar bg-pink brround avatar-md">
                            MS
                          </span>
                        </div>
                        <Link className="wrapper w-100 ms-3" to="#">
                          <p className="mb-0 d-flex ">
                            <b>Prepare for Presentation</b>
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <i className="mdi mdi-clock text-muted me-1 tx-11"></i>
                              <small className="text-muted ms-auto">
                                1 days ago
                              </small>
                              <p className="mb-0"></p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="list d-flex align-items-center border-bottom p-3">
                        <div className="">
                          <span className="avatar bg-purple brround avatar-md">
                            L
                          </span>
                        </div>
                        <Link className="wrapper w-100 ms-3" to="#">
                          <p className="mb-0 d-flex ">
                            <b>Prepare for Presentation</b>
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <i className="mdi mdi-clock text-muted me-1 tx-11"></i>
                              <small className="text-muted ms-auto">
                                45 mintues ago
                              </small>
                              <p className="mb-0"></p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="list d-flex align-items-center p-3">
                        <div className="">
                          <span className="avatar bg-secondary brround avatar-md">
                            U
                          </span>
                        </div>
                        <Link className="wrapper w-100 ms-3" to="#">
                          <p className="mb-0 d-flex ">
                            <b>Prepare for Presentation</b>
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <i className="mdi mdi-clock text-muted me-1 tx-11"></i>
                              <small className="text-muted ms-auto">
                                2 days ago
                              </small>
                              <p className="mb-0"></p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    </Scrollbars>
                  </Tab.Pane>         
                  <Tab.Pane eventKey="side2" className="side1">
                  <Scrollbars style={{height:"800px"}}>
                    <div className="tab-pane " id="side2">
                      <div className="list-group list-group-flush ">
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-3">
                            <img alt=""
                              className="avatar avatar-lg brround cover-image"
                              src={require("../../assets/img/faces/12.jpg")}
                            />
                            <span className="avatar-status bg-success"></span>
                          </div>
                          <div>
                            <strong>Madeleine</strong> Hey! there I' am
                            available....
                            <div className="small text-muted">3 hours ago</div>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-3">
                            <img alt=""
                              className="avatar avatar-lg brround cover-image"
                              src={require("../../assets/img/faces/1.jpg")}
                            />
                          </div>
                          <div>
                            <strong>Anthony</strong> New product Launching...
                            <div className="small text-muted">5 hour ago</div>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-3">
                            <img alt=""
                              className="avatar avatar-lg brround cover-image"
                              src={require("../../assets/img/faces/2.jpg")}
                            />
                            <span className="avatar-status bg-success"></span>
                          </div>
                          <div>
                            <strong>Olivia</strong> New Schedule Realease......
                            <div className="small text-muted">
                              45 mintues ago
                            </div>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-3">
                            <img alt=""
                              className="avatar avatar-lg brround cover-image"
                              src={require("../../assets/img/faces/8.jpg")}
                            />
                            <span className="avatar-status bg-success"></span>
                          </div>
                          <div>
                            <strong>Madeleine</strong> Hey! there I' am
                            available....
                            <div className="small text-muted">3 hours ago</div>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-3">
                            <img alt=""
                              className="avatar avatar-lg brround cover-image"
                              src={require("../../assets/img/faces/11.jpg")}
                            />
                          </div>
                          <div>
                            <strong>Anthony</strong> New product Launching...
                            <div className="small text-muted">5 hour ago</div>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-3">
                            <img alt=""
                              className="avatar avatar-lg brround cover-image"
                              src={require("../../assets/img/faces/6.jpg")}
                            />
                            <span className="avatar-status bg-success"></span>
                          </div>
                          <div>
                            <strong>Olivia</strong> New Schedule Realease......
                            <div className="small text-muted">
                              45 mintues ago
                            </div>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-3">
                            <img alt=""
                              className="avatar avatar-lg brround cover-image"
                              src={require("../../assets/img/faces/9.jpg")}
                            />
                            <span className="avatar-status bg-success"></span>
                          </div>
                          <div>
                            <strong>Olivia</strong> Hey! there I' am
                            available....
                            <div className="small text-muted">
                              12 mintues ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </Scrollbars>
                  </Tab.Pane>
                  <Tab.Pane eventKey="side3"className="side1">
                  <Scrollbars style={{height:"800px"}}>
                    <div className="tab-pane " id="side3">
                      <div className="list-group list-group-flush ">
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-2">
                            <img alt=""
                              className="avatar avatar-md brround cover-image"
                              src={require("../../assets/img/faces/9.jpg")}
                            />
                            <span className="avatar-status bg-success"></span>
                          </div>
                          <div className="">
                            <div
                              className="font-weight-semibold"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              Mozelle Belt
                            </div>
                          </div>
                          <div className="ms-auto">
                            <Link
                              to="#"
                              className="btn btn-sm btn-outline-light btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              <i className="mdi mdi-message-outline"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-2">
                            <img alt=""
                              className="avatar avatar-md brround cover-image"
                              src={require("../../assets/img/faces/11.jpg")}
                            />
                          </div>
                          <div className="">
                            <div
                              className="font-weight-semibold"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              Florinda Carasco
                            </div>
                          </div>
                          <div className="ms-auto">
                            <Link
                              to="#"
                              className="btn btn-sm btn-outline-light btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              <i className="mdi mdi-message-outline"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-2">
                            <img alt=""
                              className="avatar avatar-md brround cover-image"
                              src={require("../../assets/img/faces/10.jpg")}
                            />
                            <span className="avatar-status bg-success"></span>
                          </div>
                          <div className="">
                            <div
                              className="font-weight-semibold"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              Alina Bernier
                            </div>
                          </div>
                          <div className="ms-auto">
                            <Link
                              to="#"
                              className="btn btn-sm btn-outline-light btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              <i className="mdi mdi-message-outline"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-2">
                            <img alt=""
                              className="avatar avatar-md brround cover-image"
                              src={require("../../assets/img/faces/2.jpg")}
                            />
                            <span className="avatar-status bg-success"></span>
                          </div>
                          <div className="">
                            <div
                              className="font-weight-semibold"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              Zula Mclaughin
                            </div>
                          </div>
                          <div className="ms-auto">
                            <Link
                              to="#"
                              className="btn btn-sm btn-outline-light btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              <i className="mdi mdi-message-outline"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-2">
                            <img alt=""
                              className="avatar avatar-md brround cover-image"
                              src={require("../../assets/img/faces/13.jpg")}
                            />
                          </div>
                          <div className="">
                            <div
                              className="font-weight-semibold"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              Isidro Heide
                            </div>
                          </div>
                          <div className="ms-auto">
                            <Link
                              to="#"
                              className="btn btn-sm btn-outline-light btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              <i className="mdi mdi-message-outline"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-2">
                            <img alt=""
                              className="avatar avatar-md brround cover-image"
                              src={require("../../assets/img/faces/12.jpg")}
                            />
                            <span className="avatar-status bg-success"></span>
                          </div>
                          <div className="">
                            <div
                              className="font-weight-semibold"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              Mozelle Belt
                            </div>
                          </div>
                          <div className="ms-auto">
                            <Link
                              to="#"
                              className="btn btn-sm btn-outline-light btn-rounded"
                            >
                              <i className="mdi mdi-message-outline"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-2">
                            <img alt=""
                              className="avatar avatar-md brround cover-image"
                              src={require("../../assets/img/faces/4.jpg")}
                            />
                          </div>
                          <div className="">
                            <div
                              className="font-weight-semibold"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              Florinda Carasco
                            </div>
                          </div>
                          <div className="ms-auto">
                            <Link
                              to="#"
                              className="btn btn-sm btn-outline-light btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              <i className="mdi mdi-message-outline"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-2">
                            <img alt=""
                              className="avatar avatar-md brround cover-image"
                              src={require("../../assets/img/faces/7.jpg")}
                            />
                          </div>
                          <div className="">
                            <div
                              className="font-weight-semibold"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              Alina Bernier
                            </div>
                          </div>
                          <div className="ms-auto">
                            <Link
                              to="#"
                              className="btn btn-sm btn-outline-light btn-rounded"
                            >
                              <i className="mdi mdi-message-outline"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-2">
                            <img alt=""
                              className="avatar avatar-md brround cover-image"
                              src={require("../../assets/img/faces/2.jpg")}
                            />
                          </div>
                          <div className="">
                            <div
                              className="font-weight-semibold"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              Zula Mclaughin
                            </div>
                          </div>
                          <div className="ms-auto">
                            <Link
                              to="#"
                              className="btn btn-sm btn-outline-light btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              <i className="mdi mdi-message-outline"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-2">
                            <img alt=""
                              className="avatar avatar-md brround cover-image"
                              src={require("../../assets/img/faces/14.jpg")}
                            />
                            <span className="avatar-status bg-success"></span>
                          </div>
                          <div className="">
                            <div
                              className="font-weight-semibold"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              Isidro Heide
                            </div>
                          </div>
                          <div className="ms-auto">
                            <Link
                              to="#"
                              className="btn btn-sm btn-outline-light btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              <i className="mdi mdi-message-outline"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-2">
                            <img alt=""
                              className="avatar avatar-md brround cover-image"
                              src={require("../../assets/img/faces/11.jpg")}
                            />
                          </div>
                          <div className="">
                            <div
                              className="font-weight-semibold"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              Florinda Carasco
                            </div>
                          </div>
                          <div className="ms-auto">
                            <Link
                              to="#"
                              className="btn btn-sm btn-outline-light btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              <i className="mdi mdi-message-outline"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-2">
                            <img alt=""
                              className="avatar avatar-md brround cover-image"
                              src={require("../../assets/img/faces/9.jpg")}
                            />
                          </div>
                          <div className="">
                            <div
                              className="font-weight-semibold"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              Alina Bernier
                            </div>
                          </div>
                          <div className="ms-auto">
                            <Link
                              to="#"
                              className="btn btn-sm btn-outline-light btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              <i className="mdi mdi-message-outline"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-2">
                            <img alt=""
                              className="avatar avatar-md brround cover-image"
                              src={require("../../assets/img/faces/15.jpg")}
                            />
                            <span className="avatar-status bg-success"></span>
                          </div>
                          <div className="">
                            <div
                              className="font-weight-semibold"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              Zula Mclaughin
                            </div>
                          </div>
                          <div className="ms-auto">
                            <Link
                              to="#"
                              className="btn btn-sm btn-outline-light btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              <i className="mdi mdi-message-outline"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="list-group-item d-flex  align-items-center">
                          <div className="me-2">
                            <img alt=""
                              className="avatar avatar-md brround cover-image"
                              src={require("../../assets/img/faces/4.jpg")}
                            />
                          </div>
                          <div className="">
                            <div
                              className="font-weight-semibold"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              Isidro Heide
                            </div>
                          </div>
                          <div className="ms-auto">
                            <Link
                              to="#"
                              className="btn btn-sm btn-outline-light btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#chatmodel"
                            >
                              <i className="mdi mdi-message-outline"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    </Scrollbars>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
RightSidebar.propTypes = {};

RightSidebar.defaultProps = {};
