import React from "react";
import { Breadcrumb, Card, Row, Col, Button, Form, FormGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import {Customize} from "./data";


const VideoManagement = () => (
  <div>
    <div className="main-container container-fluid">
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1"><i className="fas fa-video">&nbsp;&nbsp;&nbsp;Video Resolution Management</i></span>

        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item " active aria-current="page" >
              <i className="fa fa-home">&nbsp;&nbsp;&nbsp;Home</i> / Update resolution
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}
      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div className="d-flex mb-3">
                <div className="d-flex">
                  <h4 className="mb-1"><i className="fa fa-plus-circle">&nbsp;&nbsp;&nbsp;Add video resolution</i></h4>
                  &nbsp;&nbsp;<Button variant='' className="btn btn-outline-info btn-rounded">
                    View Logs
                  </Button>
                </div>
              </div>
              <div className="table-responsive border p-3">
                <Row className="row-sm">
                  <Col xl={3} md={6} lg={6} sm={6}>
                    <div className="plan-card text-md-right">
                      <h6>Select institute&nbsp;
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip className="tooltip tooltip-primary1">
                              Select the name of the institute from the dropdown list
                            </Tooltip>
                          }
                        >
                          <i className="bi bi-exclamation-circle"></i>
                        </OverlayTrigger>
                      </h6>
                    </div>
                  </Col>
                  <Col xl={8} md={6} lg={6} sm={6}>
                    <div className="plan-card text-right">
                      <Form>
                        <FormGroup className="form-group">
                          <Customize />
                        </FormGroup>
                      </Form>
                    </div>
                  </Col>
                </Row>
                <Row className="row-sm">
                  <Col xl={3} md={6} lg={6} sm={6}>
                    <div className="plan-card text-md-right">
                      <h6>Select audio&nbsp;
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip className="tooltip tooltip-primary1">
                              Select the status to enable or disable the audio record
                            </Tooltip>
                          }
                        >
                          <i className="bi bi-exclamation-circle"></i>
                        </OverlayTrigger>
                      </h6>
                    </div>
                  </Col>
                  <Col xl={8} md={6} lg={6} sm={6}>
                    <div className="plan-card text-right">
                      <Form>
                        <FormGroup className="form-group">
                          <Customize />
                        </FormGroup>
                      </Form>
                    </div>
                  </Col>
                </Row>
                <Row className="row-sm">
                  <Col xl={3} md={6} lg={6} sm={6}>
                    <div className="plan-card text-md-right">
                      <h6>Video resolution&nbsp;
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip className="tooltip tooltip-primary1">
                              Select the status to enable or disable the audio record
                            </Tooltip>
                          }
                        >
                          <i className="bi bi-exclamation-circle"></i>
                        </OverlayTrigger>
                      </h6>
                    </div>
                  </Col>
                  <Col xl={8} md={6} lg={6} sm={6}>
                    <div className="plan-card text-right">
                      <Form>
                        <FormGroup className="form-group">
                          <Customize />
                        </FormGroup>
                      </Form>
                    </div>
                  </Col>
                </Row>
                <Row className="row-sm">
                  <Col xl={3} md={6} lg={6} sm={6}>
                    <div className="plan-card text-md-right">
                      <h6>Frame rate&nbsp;
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip className="tooltip tooltip-primary1">
                              Frame rate is the amount of individual video frames that your camera captures, per second. Frame rate comes in a few different standards
                            </Tooltip>
                          }
                        >
                          <i className="bi bi-exclamation-circle"></i>
                        </OverlayTrigger>
                      </h6>
                    </div>
                  </Col>
                  <Col xl={8} md={6} lg={6} sm={6}>
                    <div className="plan-card text-right">
                      <Form>
                        <FormGroup className="form-group">
                          <Form.Control type="text" className="form-control" id="firstName" placeholder="Enter the framerate you want" />
                        </FormGroup>
                      </Form>
                    </div>
                  </Col>
                </Row>
                <Row className="row-sm">
                  <Col xl={12} md={6} lg={6} sm={6}>
                    <div className="d-flex ms-auto"><Button variant="" type="button" className="btn btn-teal btn-w-sm mb-1">
                      <i className="fa fa-save"></i> Save
                    </Button></div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
);

VideoManagement.propTypes = {};

VideoManagement.defaultProps = {};

export default VideoManagement;