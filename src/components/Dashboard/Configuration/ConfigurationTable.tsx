import React from "react";
import { Row, Col, Form, FormGroup, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
// import { Customize } from "./data";


const ConfigurationTable = () => (
  <>
    <Row className="row-sm">
      <Col xl={3} md={6} lg={6} sm={6}>
        <div className="plan-card text-md-right">
          <h6>SMTP Protocol&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Enter a valid SMTP protocal for mail server. Ex: -smtp.gmail.com
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
          <h6>SMTP Host&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  This is the SMTP host address provided by your hosting company.
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
          <h6>SMTP Port&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  This is the port used by outgoing gamil server.
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
          <h6>SMTP User&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  User depend on the email service your company is using
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
          <h6>SMTP Password&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  The password that you use for you web password
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
          <h6>Charset&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Synonym for coded charcter set
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
          <h6>Mail Type&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip className="tooltip tooltip-primary1">
                  Where a large list of people are sent the same or very similar emails from a source to which they've intentionally subscribed.
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
  </>
);

ConfigurationTable.propTypes = {};

ConfigurationTable.defaultProps = {};

export default ConfigurationTable;