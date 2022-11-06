import React from "react";
import { Breadcrumb, Row, Col, Button, Tooltip, OverlayTrigger, Accordion } from "react-bootstrap";
// import { BlockTable } from "./BlockTable";

const TermCondition = () => (
  <div>
    <div className="main-container container-fluid">
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1"><i className="fa fa-briefcase">&nbsp;&nbsp;&nbsp;Terms And Conditions</i></span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item " active aria-current="page" >
              <i className="fa fa-home">&nbsp;&nbsp;&nbsp;Home</i> / Terms and Conditions
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}
      <Row className='faq'>
        <Col md={12}xl={12}xs={12} sm={12}>
          <div className="panel-group2" id="accordion11" role="tablist">

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="d-flex br-5">
                    <div className="d-flex flex-grow-1">
                      <h4 className=" mb-1"><i className="fa fa-calendar">&nbsp;&nbsp;&nbsp; Account creation terms and conditions</i>
                        &nbsp;
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip className="tooltip tooltip-primary1">
                              Update the terms and conditions of account creation
                            </Tooltip>
                          }
                        >
                          <i className="bi bi-exclamation-circle"></i>
                        </OverlayTrigger>
                      </h4>
                    </div>
                    <div className=" mg-l-auto">
                      <Button variant="" type="button" className="btn btn-outline-primary mx-2 button-ico mg-l-auto fc-right">
                        <i className="fa fa-plus"></i> 
                      </Button>
                    </div>

                  </div>
                </Accordion.Header>
                <Accordion.Body id="collapseFour1" className="panel-body">
                  <p className="text-muted tx-14">
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure, but
                    because those who do not know how to pursue pleasure
                    rationally encounter consequences
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
      </Row>
      {/* <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div className="d-flex">
                <div>
                  <h4 className=" mb-1"><i className="fa fa-calendar">&nbsp;&nbsp;&nbsp; Account creation terms and conditions</i>
                  &nbsp;
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip className="tooltip tooltip-primary1">
                          Update the terms and conditions of account creation
                        </Tooltip>
                      }
                    >
                      <i className="bi bi-exclamation-circle"></i>
                    </OverlayTrigger>
                  </h4>
                </div>
                <div className="ms-auto d-flex flex-row">
                  <Button variant="" type="button" className="btn btn-outline-primary mx-2 button-ico fc-right">
                    <i className="fa fa-plus"></i> Add New Program
                  </Button>
                </div>

              </div>
              <hr className="text-primary" />
              <div className="table-responsive border p-3">
                
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </div>
  </div>
);

TermCondition.propTypes = {};

TermCondition.defaultProps = {};

export default TermCondition;