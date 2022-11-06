import React from "react";
import { Breadcrumb, Card, Row, Col, Button } from "react-bootstrap";
import {TitleTables} from "./TitleTable";

const Title = () => (
    <div>
        <div className="main-container container-fluid">
            {/* <!-- breadcrumb --> */}
            <div className="breadcrumb-header justify-content-between">
                <div className="left-content">
                    <span className="main-content-title mg-b-0 mg-b-lg-1"><i className="fa fa-server">&nbsp;&nbsp;&nbsp;Titles Management</i></span>
                </div>
                <div className="justify-content-center mt-2">
                    <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item className="breadcrumb-item " active aria-current="page" >
                            <i className="fa fa-home">&nbsp;&nbsp;&nbsp;Home</i> / Titles list
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
                                    <h4 className="mb-1"><i className="fa fa-table">&nbsp;&nbsp;&nbsp;Title's list</i></h4>
                                </div>
                                <div className="ms-auto d-flex flex-row">
                                    <Button variant="" type="button" className="btn btn-outline-primary mx-2 button-ico">
                                        <i className="fa fa-plus"></i>&nbsp;&nbsp;Add New Title
                                    </Button>
                                </div>

                            </div>
                            
                            <div className="table-responsive border p-3">
                                <TitleTables />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
);

Title.propTypes = {};

Title.defaultProps = {};

export default Title;