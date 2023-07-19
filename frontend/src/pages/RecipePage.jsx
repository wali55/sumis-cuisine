import { Link, useParams } from "react-router-dom";
import { Container, ListGroup } from "react-bootstrap";
import recipes from "../recipes";

const RecipePage = () => {
  const { id: recipeId } = useParams();
  console.log(recipes);
  const recipe = recipes.find((r) => r._id === recipeId);
  console.log(recipe);

  return (
    <>
      <Link className="btn btn-light my-3" to="/" style={{ marginLeft: "6.8rem" }}>
        Go Back
      </Link>
      <Container style={{ maxWidth: "700px" }}>
        <h1>{recipe.title}</h1>
        <div
          className="my-5"
          style={{ marginLeft: "-2rem", marginRight: "-2rem" }}
        >
          <img
            style={{ width: "100%" }}
            src={recipe.image}
            alt={recipe.title}
          />
        </div>
        <h4 className="mb-4">Ingredients:</h4>
        <ListGroup className="mb-4">
          {recipe.ingredients.map((item, index) => (
            <ListGroup.Item key={item}>
              {index + 1}. {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "4rem", marginTop: "4rem" }}>
          <iframe
            width="700"
            height="393.75"
            src={recipe.video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <p style={{ lineHeight: "26px", fontSize: "18px" }}>
          {recipe.description}
        </p>
      </Container>
    </>
  );
};

export default RecipePage;
