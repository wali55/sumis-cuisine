import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Recipe.css";

const Recipe = ({ recipe }) => {
  return (
    <Card style={{ width: "18rem", marginBottom: "2rem" }}>
      <Link
        to={`/recipe/${recipe._id}`}
        style={{ textDecoration: "none", color: "#000" }}
      >
        <Card.Img variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Title>{recipe.title}</Card.Title>
          <Card.Text className="card-description">
            {recipe.description}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default Recipe;
