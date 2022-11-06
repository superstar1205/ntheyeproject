import React from "react";
import { Breadcrumb, Card, Row, Col, Button, Form, OverlayTrigger, Tooltip, FormGroup } from "react-bootstrap";
import SessionTable from "./SessionTable";

const SessionType = () => (
  <div>
    <div className="main-container container-fluid">
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1"><i className="fa fa-th">&nbsp;&nbsp;&nbsp;Session Type Management</i></span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item " active aria-current="page" >
              <i className="fa fa-home">&nbsp;&nbsp;&nbsp;Home</i> / Session type
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
                  <h4 className="mb-1"><i className="fa fa-edit">&nbsp;&nbsp;&nbsp;Edit session type</i></h4>
                </div>
              </div>
              <div className="table-responsive border p-3">
                <SessionTable/>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
);

SessionType.propTypes = {};

SessionType.defaultProps = {};

export default SessionType;