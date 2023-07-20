import { useState, useEffect } from "react";
import Recipe from "../components/Recipe";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data } = await axios.get("http://localhost:5000/api/recipes");
      console.log(data)
      setRecipes(data);
    }

    fetchRecipes();
  }, []);

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
