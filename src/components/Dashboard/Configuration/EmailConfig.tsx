import React from "react";
import { Breadcrumb, Card, Row, Col, Button } from "react-bootstrap";
import ConfigurationTable from "./ConfigurationTable";

const EmailConfiguration = () => (
    <div>
        <div className="main-container container-fluid">
            {/* <!-- breadcrumb --> */}
            <div className="breadcrumb-header justify-content-between">
                <div className="left-content">
                    <span className="main-content-title mg-b-0 mg-b-lg-1"><i className="far fa-envelope">&nbsp;&nbsp;&nbsp;Email Configuration</i></span>
                </div>
                <div className="justify-content-center mt-2">
                    <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item className="breadcrumb-item " active aria-current="page" >
                            <i className="fa fa-home">&nbsp;&nbsp;&nbsp;Home</i> / Template list / Edit configuration
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
                                    <h4 className="mb-1"><i className="fa fa-table">&nbsp;&nbsp;&nbsp;Edit Email Configurations</i></h4>
                                </div>
                            </div>
                            <div className="table-responsive border p-3">
                                <ConfigurationTable/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
);

EmailConfiguration.propTypes = {};

EmailConfiguration.defaultProps = {};

export default EmailConfiguration;