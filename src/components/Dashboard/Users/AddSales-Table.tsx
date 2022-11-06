import React from "react";
import { Row, Col, Form, FormGroup, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { Customize } from "./data";


const SalesTable = () => (
  <>
  <Row className="row-sm">
      <Col xl={3} md={6} lg={6} sm={6}>
        <div className="plan-card text-md-right">
          <h6>Select geography&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Select the geography of the sales representative
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
          <h6>Reports to&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Select the authority figure to whom sales representative will be representing.
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
          <h6>First Name&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Enter the First Name of the system user
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
              <Form.Control type="text" className="form-control" id="firstName" placeholder="First Name *" />
            </FormGroup>
          </Form>
        </div>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col xl={3} md={6} lg={6} sm={6}>
        <div className="plan-card text-md-right">
          <h6>Last Name&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Enter the Last Name of the system user
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
              <Form.Control type="text" className="form-control" id="lastName" placeholder="Last Name *" />
            </FormGroup>
          </Form>
        </div>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col xl={3} md={6} lg={6} sm={6}>
        <div className="plan-card text-md-right">
          <h6>Email&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Enter the email of the system user
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
              <Form.Control type="email" className="form-control" id="email" placeholder="Email *" />
            </FormGroup>
          </Form>
        </div>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col xl={3} md={6} lg={6} sm={6}>
        <div className="plan-card text-md-right">
          <h6>Phone&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Enter the phone of the system user
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
              <Form.Control type="number" className="form-control" id="phone" placeholder="Enter Phone" />
            </FormGroup>
          </Form>
        </div>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col xl={12} md={6} lg={6} sm={6}>
        <div className="d-flex ms-auto"><Button variant="" type="button" className="btn btn-teal btn-w-sm mb-1">
          <i className="fa fa-plus"></i> Add User
        </Button></div>
      </Col>
    </Row>
  </>
);

SalesTable.propTypes = {};

SalesTable.defaultProps = {};

export default SalesTable;