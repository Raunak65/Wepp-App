import React from "react";
import Grid from "@mui/material/Card";
import CardData from "./CardData";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

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
  },
  {
    id: 5,
    title: "Lizard1",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://media.istockphoto.com/photos/taj-majal-at-sunrise-in-agra-india-picture-id1152168512",
    price: "$40",
  },
  {
    id: 6,
    title: "Lizard2",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://media.istockphoto.com/photos/taj-majal-at-sunrise-in-agra-india-picture-id1152168512",
    price: "$30",
  },
  {
    id: 7,
    title: "Lizard3",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://media.istockphoto.com/photos/taj-majal-at-sunrise-in-agra-india-picture-id1152168512",
    price: "$20",
  },
  {
    id: 8,
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
    <Container sx={{ flexGrow: 1 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {products.map((product) => (
          <Stack item key={product.id} xs={6} spacing={{ xs: 1, sm: 2, md: 4 }}>
            <CardData product={product} />
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};

export default CardDisplay;

