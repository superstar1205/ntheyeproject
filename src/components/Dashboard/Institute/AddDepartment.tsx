import React from "react";
import { Breadcrumb, Card, Row, Col, Button, Form, FormGroup, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Customize } from "./data";

const AddDepartment = () => (
  <div>
    <div className="main-container container-fluid">
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1"><i className="fa fa-id-badge">&nbsp;&nbsp;&nbsp;Institute Management</i></span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item " active aria-current="page" >
              <i className="fa fa-home">&nbsp;&nbsp;&nbsp;Home</i> / Institute List / Add Department
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
                <div>
                  <h4 className="main-content-label mb-1"><i className="bi bi-columns">&nbsp;&nbsp;&nbsp;Add department</i></h4>
                </div>
                <div className="ms-auto d-flex flex-row">
                  <Button variant="" type="button" className="btn btn-outline-primary mx-2 button-ico d-flex">
                    <i className="fe fe-plus me-2"></i>Add New College
                  </Button>
                </div>
              </div>
              <div className="table-responsive border p-3">
                <Row className="row-sm">
                  <Col xl={3} md={6} lg={6} sm={6}>
                    <div className="plan-card text-md-right">
                      <h6>Select Institute&nbsp;
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
                      <h6>Select college&nbsp;
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip className="tooltip tooltip-primary1">
                              Select the name of the college from the dropdown list
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
                      <h6>Department name&nbsp;
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip className="tooltip tooltip-primary1">
                              Enter the name of the new department
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
                          <Form.Control type="text" className="form-control" id="firstName" placeholder="Enter department Name *" />
                        </FormGroup>
                      </Form>
                    </div>
                  </Col>
                </Row>
                <Row className="row-sm">
                  <Col xl={12} md={6} lg={6} sm={6}>
                    <div className="d-flex ms-auto"><Button variant="" type="button" className="btn btn-teal btn-w-sm mb-1">
                      <i className="fa fa-plus"></i> Add New Department
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

AddDepartment.propTypes = {};

AddDepartment.defaultProps = {};

export default AddDepartment;