import React from "react";
import { Breadcrumb, Card, Row, Col, Button, Form, Tooltip, OverlayTrigger, FormGroup } from "react-bootstrap";


const SessionBucket = () => (
  <div>
    <div className="main-container container-fluid">
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1"><i className="fa fa-shopping-basket">&nbsp;&nbsp;&nbsp;Session Bucket Management</i></span>
          &nbsp;&nbsp;<Button variant='' className="btn btn-outline-info  btn-rounded">
           View Logs
         </Button>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item " active aria-current="page" >
              <i className="fa fa-home">&nbsp;&nbsp;&nbsp;Home</i> / Edit bucket slot
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}
      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div className="d-flex">
                <div>
                  <h4 className="main-content-label mb-1"><i className="fa fa-edit">&nbsp;&nbsp;&nbsp;Edit bucket</i></h4>
                </div>

              </div>
              <hr className="text-primary" />
              <div className="table-responsive border p-3">
                <Row className="row-sm">
                  <Col xl={3} md={6} lg={6} sm={6}>
                    <div className="plan-card text-md-right">
                      <h6>Bucket Value&nbsp;
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip className="tooltip tooltip-primary1">
                              Give the value of the bucket
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
                          <Form.Control type="text" className="form-control" id="firstName" value="10" />
                        </FormGroup>
                      </Form>
                    </div>
                  </Col>
                </Row>
                <Row className="row-sm">
                  <Col xl={3} md={6} lg={6} sm={6}>
                    <div className="plan-card text-md-right">
                      <h6>ASAP Bucket value&nbsp;
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip className="tooltip tooltip-primary1">
                              Give the value of the bucket for ASAP
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
                          <Form.Control type="text" className="form-control" id="lastName" value="30" />
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

SessionBucket.propTypes = {};

SessionBucket.defaultProps = {};

export default SessionBucket;