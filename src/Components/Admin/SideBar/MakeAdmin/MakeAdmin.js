import { Box, Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MakeAdmin.css";
function MakeAdmin() {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [values, setValues] = useState({
    product: "",
    weight: "",
    price: "",
  });
  const formClear = () => {
    setValues({
      product: "",
      weight: "",
      price: "",
    });
  };

  const handleChange = (e) => {
    const value = { ...values };
    value[e.target.name] = e.target.value;
    setValues(value);
  };
  const handleImage = (e) => {
    const imageData = new FormData();
    imageData.set("key", "b5b8f2f92d6b141a29f44de2a89cdbc7");
    imageData.append("image", e.target.files[0]);
    // axios.post(`https://api.imgbb.com/1/upload`, imageData).then((result) => {
    //   setImage(result.data.data.display_url);
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formClear();
    const fieldData = { ...values };
    fieldData.imageUrl = image;
    fetch(`https://blueberry-cobbler-59605.herokuapp.com/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fieldData),
    })
      .then((result) => {
        console.log(result);
        setMessage("Product Insert Successfully !");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="AdminWrapped">
      <Container>
        <Row>
          <Col>
            <Box>
              <Typography variant="h4">Make Admin</Typography>
            </Box>
          </Col>
        </Row>
        <div className="adminField">
          {message && (
            <h6 class="alert alert-success" role="alert">
              {message}
            </h6>
          )}
          <form action="/createProduct" onSubmit={handleSubmit} method="post">
            <Row>
              <Col md={10}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control input"
                  name="email"
                  value={values.product}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Admin Email..."
                  required
                />
              </Col>
              <Col md={2}>
                <Button
                  type="submit"
                  variant="contained"
                  className="Buttons"
                >
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

export default MakeAdmin;
