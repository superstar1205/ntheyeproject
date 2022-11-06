import React from "react";
import { Breadcrumb, Card, Row, Col, Button } from "react-bootstrap";
import SalesTable from "./AddSales-Table";

const AddSales = () => (
    <div>
        <div className="main-container container-fluid">
            {/* <!-- breadcrumb --> */}
            <div className="breadcrumb-header justify-content-between">
                <div className="left-content">
                    <span className="main-content-title mg-b-0 mg-b-lg-1"><i className="fa fa-id-badge">&nbsp;&nbsp;&nbsp;Add Sales Representative</i></span>
                </div>
                <div className="justify-content-center mt-2">
                    <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item className="breadcrumb-item " active aria-current="page" >
                            <i className="fa fa-home">&nbsp;&nbsp;&nbsp;Home</i> / Add sales user
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
                                    <h4 className="mb-1"><i className="fa fa-user-plus">&nbsp;&nbsp;&nbsp;Add Sales Representative</i></h4>
                                </div>

                            </div>
                            
                            <div className="table-responsive border p-3">
                                <SalesTable/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
);

AddSales.propTypes = {};

AddSales.defaultProps = {};

export default AddSales;