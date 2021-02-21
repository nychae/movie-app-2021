import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5</h4>
      <img src={picture} width="300px" height="200px" alt="" />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "pizza",
    image:
      "https://post.healthline.com/wp-content/uploads/2020/07/pizza-beer-1200x628-facebook-1200x628.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "cake",
    image:
      "https://igav3-metcdn-com.global.ssl.fastly.net/content/uploads/sites/2/2018/10/16091327/49_Hero.png",
    rating: 4.5,
  },
  {
    id: 3,
    name: "pasta",
    image:
      "https://assets.bonappetit.com/photos/5de7e495b79e20000879d72a/1:1/w_2560%2Cc_limit/Amiel-Lobster-Pasta-Lede-1.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "sandwich",
    image:
      "https://static01.nyt.com/images/2020/11/25/dining/23leftoversrex1/merlin_179868645_ccb9d1b4-9544-4368-afa4-c5fa354aa794-articleLarge.jpg",
    rating: 5,
  },
];
function App() {
  return (
    <div className="App">
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
