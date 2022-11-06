import React from "react";
import { Breadcrumb, Card, Row, Col, Button } from "react-bootstrap";
import { BlockTable } from "./BlockTable";

const ExcludeSystem = () => (
    <div>
        <div className="main-container container-fluid">
            {/* <!-- breadcrumb --> */}
            <div className="breadcrumb-header justify-content-between">
                <div className="left-content">
                    <span className="main-content-title mg-b-0 mg-b-lg-1"><i className="fa fa-server">&nbsp;&nbsp;&nbsp;Process Management</i></span>
                </div>
                <div className="justify-content-center mt-2">
                    <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item className="breadcrumb-item " active aria-current="page" >
                            <i className="fa fa-home">&nbsp;&nbsp;&nbsp;Home</i> / Exclude system process List
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
                                    <h4 className="main-content-label mb-1"><i className="fa fa-unlock">&nbsp;&nbsp;&nbsp;Exclude system process's List</i></h4>
                                </div>
                                <div className="ms-auto d-flex flex-row">
                                    <Button variant="" type="button" className="btn btn-outline-primary mx-2 button-ico fc-right">
                                        <i className="fa fa-plus"></i> Add New Process
                                    </Button>
                                </div>

                            </div>
                            
                            <div className="table-responsive border p-3">
                                <BlockTable />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
);

ExcludeSystem.propTypes = {};

ExcludeSystem.defaultProps = {};

export default ExcludeSystem;