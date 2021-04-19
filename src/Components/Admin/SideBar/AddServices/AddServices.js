import { Box, Button, Typography } from "@material-ui/core";
import axios from 'axios';
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AddServices.css";
function AddServices() {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: ""
  });
  const formClear = () => {
    setValues({
      title: "",
      description: "",
      price: ''
    });
  };

  const handleChange = (e) => {
    const value = { ...values };
    value[e.target.name] = e.target.value;
    setValues(value);
  };
  const handleImage = (e) => {
    const imageData = new FormData();
    imageData.set("key", "39bbd96e90b82af25ff8eb5651f7e54d");
    imageData.append("image", e.target.files[0]);
    axios.post(`https://api.imgbb.com/1/upload`, imageData).then((result) => {
      setImage(result.data.data.display_url);
    });
  };

  const handleSubmit = (e) => {
    formClear();
    const inputData = { ...values };
    inputData.imageUrl = image;
    fetch(`https://repair-house.herokuapp.com/item`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((result) => {
        console.log(result);
        setMessage("Service added Successfully !");
      })
      .catch((err) => {
        console.log(err);
      });
      e.preventDefault();
  };

  return (
    <div className="serviceWrapped">
      <Container>
        <Row>
          <Col>
          <br/>
            <Box>
              <Typography variant="h4">Add Service</Typography>
            </Box>
          </Col>
        </Row>
        <br/>
        <div className="addServicesField">
          {message && (
            <h6 class="alert alert-success" role="alert">
              {message}
            </h6>
          )}
          <form action="/createItem" method="post" onSubmit={handleSubmit}>
            <Row>
              <Col>
                <label htmlFor="servicesTitle">Service Title</label>
                <input
                  type="text"
                  className="form-control input"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Services Title..."
                  required
                />
              </Col>
              <Col>
                <label htmlFor="uploadImage">Upload Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImage}
                  className="form-control input"
                  required
                />
              </Col>
            </Row>
            <Row>
            <Col>
              <br/>
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  placeholder="Write Description"
                  className="form-control input"
                  value={values.description}
                  onChange={handleChange}
                  cols="25"
                  rows="5"
                ></textarea>
              </Col>
              <Col>
              <br/>
              <label htmlFor="servicesTitle">Service Price</label>
                <input
                  type="number"
                  className="form-control input"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Services Price..."
                  required
                />
              </Col>

            </Row>
            <Row>
  
            </Row>
            <Row>
           
              <Col md={12}>
              <br/>

                <Button type="submit" id="addservice" className="Button form-control">
                  Submit
                </Button>
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default AddServices;
