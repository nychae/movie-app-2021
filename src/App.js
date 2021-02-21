import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h3>I like {name}</h3>;
      <img src={picture} width="300px" height="200px" />
    </div>
  );
}

const foodILike = [
  {
    name: "pizza",
    image:
      "https://post.healthline.com/wp-content/uploads/2020/07/pizza-beer-1200x628-facebook-1200x628.jpg",
  },
  {
    name: "cake",
    image:
      "https://igav3-metcdn-com.global.ssl.fastly.net/content/uploads/sites/2/2018/10/16091327/49_Hero.png",
  },
  {
    name: "pasta",
    image:
      "https://assets.bonappetit.com/photos/5de7e495b79e20000879d72a/1:1/w_2560%2Cc_limit/Amiel-Lobster-Pasta-Lede-1.jpg",
  },
  {
    name: "sandwich",
    image:
      "https://static01.nyt.com/images/2020/11/25/dining/23leftoversrex1/merlin_179868645_ccb9d1b4-9544-4368-afa4-c5fa354aa794-articleLarge.jpg",
  },
];
function App() {
  return (
    <div className="App">
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
