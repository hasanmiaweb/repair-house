import { Box, Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiDeleteBin6Fill } from 'react-icons/ri';
import TextTruncate from "react-text-truncate";
import "./ManageService.css";
function ManageService() {
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`https://repair-house.herokuapp.com/item`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, []);
  const handleDelete = (id) => {
    fetch(`https://repair-house.herokuapp.com/item/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`https://repair-house.herokuapp.com/item`)
        .then((res) => res.json())
        .then((data) => setDbData(data));
    });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <br/>
            <Box>
              <Typography variant="h4">Manage Service</Typography>
            </Box>
          </Col>
        </Row>
        <br/>
        <div className="OrderList">
          <Row>
            <Col>
              <table>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
                {dbData.map((data) => (
                  <tr>
                    <td>{data.title}</td>
                    <td>
                      {
                        <TextTruncate
                          line={1}
                          element="span"
                          truncateText="…"
                          text={data.description}
                        />
                      }
                    </td>
                    <td>
                      {
                        <div className="manageServiceIcon">
                          <img
                            src={data.imageUrl}
                            className="img-fluid"
                            alt="pc"
                          />
                        </div>
                      }
                    </td>
                    <td>${data.price}</td>
                    <td>
                      <Button
                        onClick={() => handleDelete(data._id)}
                        color="secondary"
                      >
                        <RiDeleteBin6Fill/>
                      </Button>
                    </td>
                  </tr>
                ))}
              </table>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default ManageService;
