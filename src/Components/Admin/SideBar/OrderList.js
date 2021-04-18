import React from "react";
import { Table } from "react-bootstrap";

const OrderList = () => {
  return (
    <div>
      <div className="section-title">
          <br/>
          <br/>
        <h1>Services That We Provide</h1> <br />
      </div>
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Service</th>
            <th>Pay with</th>
            <th>Stotus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Md Parvez Hasan</td>
            <td>hasanmiaweb@gmail.com</td>
            <td>Bkash</td>
            <select className="select">
                <option>Panding</option>
                <option>OnGoing</option>
                <option>Done</option>
            </select>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
