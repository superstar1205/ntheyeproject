import React from "react";
import { Breadcrumb, Card, Row, Col, Button, Form, FormGroup, OverlayTrigger, Tooltip } from "react-bootstrap";

const StripeConfig = () => (
  <div>
    <div className="main-container container-fluid">
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1"><i className="fas fa-chart-pie">&nbsp;&nbsp;&nbsp;Stripe Configuration</i></span>
          &nbsp;&nbsp;<Button variant='' className="btn btn-outline-info  btn-rounded">
           View Logs
         </Button>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item " active aria-current="page" >
              <i className="fa fa-home">&nbsp;&nbsp;&nbsp;Home</i> / Edit stripe key
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
                  <h4 className="mb-1"><i className="fa fa-key">&nbsp;&nbsp;&nbsp;Edit stripe key</i></h4>
                </div>
              </div>
              <div className="table-responsive border p-3">
                <Row className="row-sm">
                  <Col xl={3} md={6} lg={6} sm={6}>
                    <div className="plan-card text-md-right">
                      <h6>Stripe secret key&nbsp;
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip className="tooltip tooltip-primary1">
                              Stripe secret key is the unique key provide by stripe to athorise transactions which won't be visible to user
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
                          <Form.Control type="text" className="form-control" id="firstName" placeholder="" />
                        </FormGroup>
                      </Form>
                    </div>
                  </Col>
                </Row>
                <Row className="row-sm">
                  <Col xl={3} md={6} lg={6} sm={6}>
                    <div className="plan-card text-md-right">
                      <h6>Stripe publishable key&nbsp;
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip className="tooltip tooltip-primary1">
                              Publishable key is the unique key provided by stripe to verify the card and other details
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
                          <Form.Control type="text" className="form-control" id="firstName" placeholder="" />
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

StripeConfig.propTypes = {};

StripeConfig.defaultProps = {};

export default StripeConfig;