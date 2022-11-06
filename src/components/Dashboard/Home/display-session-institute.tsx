import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
// import { Link } from "react-router-dom";


const SessionInstitute = () => {
    const data = [
        {
          id: "1",
          Name: "Joan Powell",
          Position: "Associate Developer",
          Salary: "$450,870",
        },
        {
          id: "2",
          Name: "Gavin Gibson",
          Position: "Account manager",
          Salary: "$230,540",
        },
        {
          id: "3",
          Name: "Julian Kerr",
          Position: "Senior Javascript Developer",
          Salary: "$55,300",
        },
    ];

    return (
        <div>
            {/* <!-- row opened --> */}
            <Row className="row-sm">

                {/* <!--div--> */}
                <Col xl={12}>
                    <Card>
                        <Card.Header className=" pb-0">
                            <div className="d-flex justify-content-between">
                                <h4 className="card-title mg-b-3">&nbsp;&nbsp;<i className="fas fa-file-alt">&nbsp;&nbsp;&nbsp;Session per Institute</i></h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive border p-3">
                                <Table className="table table-bordered table-hover mb-0 text-md-nowrap">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((list: any, index: any) => (
                                            <tr key={index}>
                                                <th scope="row">{list.id}</th>
                                                <td>{list.Name}</td>
                                                <td>{list.Position}</td>
                                                <td>{list.Salary}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                {/* <!--/div--> */}
            </Row>
            {/* <!-- /row --> */}
        </div>
    );
}

SessionInstitute.propTypes = {};

SessionInstitute.defaultProps = {};

export default SessionInstitute;
