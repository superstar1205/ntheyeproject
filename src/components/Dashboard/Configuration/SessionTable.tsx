import React from "react";
import { Row, Col, Form, FormGroup, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
// import { Customize } from "./data";


const SessionTable = () => (
  <>
    <Row className="row-sm">
      <Col xl={3} md={6} lg={6} sm={6}>
        <div className="plan-card text-md-right">
          <h6>Type1 name&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Enter the name of the session type
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
              <Form.Control type="text" className="form-control" id="firstName" placeholder="Auto proctor" />
            </FormGroup>
          </Form>
        </div>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col xl={3} md={6} lg={6} sm={6}>
        <div className="plan-card text-md-right">
          <h6>Type1 description&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Enter the description for the session type
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
              <Form.Control type="text" className="form-control" id="firstName" placeholder="For automated proctoring" />
            </FormGroup>
          </Form>
        </div>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col xl={3} md={6} lg={6} sm={6}>
        <div className="plan-card text-md-right">
          <h6>Type2 name&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Enter the name of the session type
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
              <Form.Control type="text" className="form-control" id="firstName" placeholder="Live proctor" />
            </FormGroup>
          </Form>
        </div>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col xl={3} md={6} lg={6} sm={6}>
        <div className="plan-card text-md-right">
          <h6>Type2 description&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Enter the description for the session type
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
              <Form.Control type="text" className="form-control" id="firstName" placeholder="For live proctoring" />
            </FormGroup>
          </Form>
        </div>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col xl={3} md={6} lg={6} sm={6}>
        <div className="plan-card text-md-right">
          <h6>Type3 name&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Enter the name of the session type
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
              <Form.Control type="text" className="form-control" id="firstName" placeholder="Dedicated proctor" />
            </FormGroup>
          </Form>
        </div>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col xl={3} md={6} lg={6} sm={6}>
        <div className="plan-card text-md-right">
          <h6>Type decription&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Enter the descriptions for the session type
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
              <Form.Control type="text" className="form-control" id="firstName" placeholder="For whitelabled proctoring" />
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
  </>
);

SessionTable.propTypes = {};

SessionTable.defaultProps = {};

export default SessionTable;