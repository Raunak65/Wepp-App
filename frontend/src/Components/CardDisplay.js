import React from "react";
import Grid from "@mui/material/Card";
import CardData from "./CardData";

const products = [
  {
    id: 1,
    title: "Lizard1",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://media.istockphoto.com/photos/taj-majal-at-sunrise-in-agra-india-picture-id1152168512",
    price: "$40",
  },
  {
    id: 2,
    title: "Lizard2",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://media.istockphoto.com/photos/taj-majal-at-sunrise-in-agra-india-picture-id1152168512",
    price: "$30",
  },
  {
    id: 3,
    title: "Lizard3",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://media.istockphoto.com/photos/taj-majal-at-sunrise-in-agra-india-picture-id1152168512",
    price: "$20",
  },
  {
    id: 4,
    title: "Lizard4",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://media.istockphoto.com/photos/taj-majal-at-sunrise-in-agra-india-picture-id1152168512",
    price: "$10",
  }
];

const CardDisplay = () => {
  return (
    <main>
      <Grid container direction="row" xs={1} md={3} spacing={24}>
        {products.map((product) => (
          <Grid item key={product.id} columns={4} xs={12} sm={6} md={4} lg={3}>
            <CardData product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default CardDisplay;

