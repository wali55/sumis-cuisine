import Recipe from "../components/Recipe";
import recipes from "../recipes";
import { Row, Col, Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Container>
        <h1>Latest Recipes</h1>
        <Row>
          {recipes.map((recipe) => (
            <Col key={recipe._id} sm={12} md={6} lg={4} xl={3}>
              <Recipe recipe={recipe} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
