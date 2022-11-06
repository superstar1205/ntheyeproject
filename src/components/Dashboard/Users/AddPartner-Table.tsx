import React from "react";
import { Row, Col, Form, FormGroup, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { Customize } from "./data";


const PartnerTable = () => (
  <>
    <Row className="row-sm">
      <Col xl={3} md={6} lg={6} sm={6}>
        <div className="plan-card text-md-right">
          <h6>Organization name&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Please enter the Organization name of the associated partner
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
              <Form.Control type="text" className="form-control" id="firstName" placeholder="Organization name *" />
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
      <Col xl={3} md={6} lg={6} sm={6}>
        <div className="plan-card text-md-right">
          <h6>Select Timezone&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Enter the Time Zone of the system user
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
          <h6>Country&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Enter the country of the system user
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
          <h6>State&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Enter the state of the system user
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
          <h6>Address&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Enter the address of the system user
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
              <Form.Control type="text" className="form-control" id="address" placeholder="Address *" />
            </FormGroup>
          </Form>
        </div>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col xl={3} md={6} lg={6} sm={6}>
        <div className="plan-card text-md-right">
          <h6>City&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Enter the city of the system user
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
              <Form.Control type="text" className="form-control" id="city" placeholder="City *" />
            </FormGroup>
          </Form>
        </div>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col xl={3} md={6} lg={6} sm={6}>
        <div className="plan-card text-md-right">
          <h6>Zip/Postal Code&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Enter the Zip/Postal Code of the system user
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
              <Form.Control type="number" className="form-control" id="postalCode" placeholder="Zip/Postal Code *" />
            </FormGroup>
          </Form>
        </div>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col xl={3} md={6} lg={6} sm={6}>
        <div className="plan-card text-md-right">
          <h6>Proctor requirment&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Select the proctoring services
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
          <h6>Partner storage&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Select partner storage
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
      <Col xl={12} md={6} lg={6} sm={6}>
        <div className="d-flex ms-auto"><Button variant="" type="button" className="btn btn-teal btn-w-sm mb-1">
          <i className="fa fa-plus"></i> Add Partner
        </Button></div>
      </Col>
    </Row>
  </>
);

PartnerTable.propTypes = {};

PartnerTable.defaultProps = {};

export default PartnerTable;