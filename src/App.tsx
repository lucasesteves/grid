import { ThemeProvider } from "styled-components";
import { Col, Row, Item, Container } from "./Components";
import theme from "./styles";
import GlobalStyles from "./styles/globalStyles";

// ToDo: refactor the code to remove duplicated code
function App() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Row>
          {array.map((e) => (
            <Col key={e} xs={6} sm={1} md={1} lg={1}>
              <Item>xs 6 / rest 1</Item>
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs={12} sm={3} md={4} lg={2}>
            <Item>xs 12 / sm 3 / md 4 / lg 2</Item>
          </Col>
          <Col xs={12} sm={6} md={4} lg={8}>
            <Item>xs 12 / sm 6 / md 4 / lg 8</Item>
          </Col>
          <Col xs={12} sm={3} md={4} lg={2}>
            <Item>xs 12 / sm 3 / md 4 / lg 2</Item>
          </Col>
        </Row>
        <Row>
          <Col xs={4} sm={3} md={6} lg={5}>
            <Item>xs 4 / sm 3 / md 6 / lg 5</Item>
          </Col>
          <Col xs={4} sm={6} md={3} lg={3}>
            <Item>xs 4 / sm 6 / md 3 / lg 3</Item>
          </Col>
          <Col xs={4} sm={3} md={3} lg={4}>
            <Item>xs 4 / sm 3 / md 3 / lg 4</Item>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
}

export default App;
