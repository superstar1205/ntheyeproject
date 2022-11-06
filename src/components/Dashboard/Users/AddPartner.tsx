import React from "react";
import { Breadcrumb, Card, Row, Col, Button } from "react-bootstrap";
import PartnerTable from "./AddPartner-Table";

const AddPartner = () => (
    <div>
        <div className="main-container container-fluid">
            {/* <!-- breadcrumb --> */}
            <div className="breadcrumb-header justify-content-between">
                <div className="left-content">
                    <span className="main-content-title mg-b-0 mg-b-lg-1"><i className="fa fa-id-badge">&nbsp;&nbsp;&nbsp;Partner Management</i></span>
                </div>
                <div className="justify-content-center mt-2">
                    <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item className="breadcrumb-item " active aria-current="page" >
                            <i className="fa fa-home">&nbsp;&nbsp;&nbsp;Home</i> / Add Partner User
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
                                    <h4 className="mb-1"><i className="fa fa-user-plus">&nbsp;&nbsp;&nbsp;Add Partner</i></h4>
                                </div>
                                <div className="ms-auto d-flex flex-row">
                                    <Button variant="" type="button" className="btn btn-outline-primary mx-2 button-ico">
                                        <i className="fa fa-table"></i>&nbsp;&nbsp;Partner List
                                    </Button>
                                </div>

                            </div>

                            
                            <div className="table-responsive border p-3">
                                <PartnerTable/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
);

AddPartner.propTypes = {};

AddPartner.defaultProps = {};

export default AddPartner;