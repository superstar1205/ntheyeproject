import React from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';
import SessionInstitute from "./display-session-institute";
// import { Link } from "react-router-dom"

const AllMetrics = () => (
  <>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1"><i className="fas fa-tachometer-alt">&nbsp;&nbsp;&nbsp;Total Metrics</i></span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Metrics
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}
    <Row className="row-sm">
      <Col xl={3} md={6} lg={6} sm={6}>
        <Card>
          <Card.Body>
            <div className="plan-card text-center">
              <i className="fas fa-university plan-icon text-primary"></i>
              <h6 className="text-drak text-uppercase mt-2">Total Institutes</h6>
              <h2 className="mb-2">3,287</h2>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} md={6} lg={6} sm={6}>
        <Card>
          <Card.Body>
            <div className="plan-card text-center">
              <i className="far fa-handshake plan-icon text-primary"></i>
              <h6 className="text-drak text-uppercase mt-2">Total Partners</h6>
              <h2 className="mb-2">3,287</h2>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} md={6} lg={6} sm={6}>
        <Card>
          <Card.Body>
            <div className="plan-card text-center">
              <i className="fa fa-user-secret plan-icon text-primary"></i>
              <h6 className="text-drak text-uppercase mt-2">Total Proctors</h6>
              <h2 className="mb-2">3,287</h2>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} md={6} lg={6} sm={6}>
        <Card>
          <Card.Body>
            <div className="plan-card text-center">
              <i className="fa fa-smile plan-icon text-primary"></i>
              <h6 className="text-drak text-uppercase mt-2">Total Supports</h6>
              <h2 className="mb-2">3,287</h2>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="row-sm">
      <Col xl={3} md={6} lg={6} sm={6}>
        <Card>
          <Card.Body>
            <div className="plan-card text-center">
              <i className="fas fa-university plan-icon text-primary"></i>
              <h6 className="text-drak text-uppercase mt-2">Total Institutes</h6>
              <h2 className="mb-2">3,287</h2>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} md={6} lg={6} sm={6}>
        <Card>
          <Card.Body>
            <div className="plan-card text-center">
              <i className="far fa-handshake plan-icon text-primary"></i>
              <h6 className="text-drak text-uppercase mt-2">Total Partners</h6>
              <h2 className="mb-2">3,287</h2>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} md={6} lg={6} sm={6}>
        <Card>
          <Card.Body>
            <div className="plan-card text-center">
              <i className="fa fa-user-secret plan-icon text-primary"></i>
              <h6 className="text-drak text-uppercase mt-2">Total Proctors</h6>
              <h2 className="mb-2">3,287</h2>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} md={6} lg={6} sm={6}>
        <Card>
          <Card.Body>
            <div className="plan-card text-center">
              <i className="fa fa-smile plan-icon text-primary"></i>
              <h6 className="text-drak text-uppercase mt-2">Total Supports</h6>
              <h2 className="mb-2">3,287</h2>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <SessionInstitute/>
  </>
);

AllMetrics.propTypes = {};

AllMetrics.defaultProps = {};

export default AllMetrics;
