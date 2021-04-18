import React from "react";
import { Button, Col, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto mt-5 mb-5">
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control type="text" required placeholder="First Name" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control type="text" required placeholder="Last Name" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control type="email" required placeholder="Email Address" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control type="number" required placeholder="Phone Number" />
              </Form.Group>
            </Form.Row>

            <Form.Group>
            <textarea name="" id="" required  className="form-control"  placeholder="Your Messege"></textarea>
            </Form.Group>

            <Button variant="primary" className="form-control" type="submit">
              Send Message
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
