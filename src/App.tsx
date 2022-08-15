import React from 'react';
import { Col, Row, Item, Container } from "./Components"

function App() {
  return (
    <Container>  
      <Row>
        <Col xs={4} sm={3} md={8} lg={2} >
          <Item>item 1</Item>
          </Col>
         <Col xs={4} sm={6} md={2} lg={9} >
          <Item>item 2</Item>
        </Col>
        <Col xs={4} sm={3} md={2} lg={1} >
          <Item>item 3</Item>
        </Col>
      </Row>
        {/* <Grid xs={4} sm={4} md={2} lg={1} >
          <Item>item 4</Item>
        </Grid> */}
      </Container>
  );
}

export default App;
