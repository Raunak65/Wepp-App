import React from "react";
import CardData from "./CardData";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

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
      "Lizards are a  ranging across all continents except Antarctica.",
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
    title: "Lizard5",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://media.istockphoto.com/photos/taj-majal-at-sunrise-in-agra-india-picture-id1152168512",
    price: "$140",
  },
  {
    id: 6,
    title: "Lizard6",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://media.istockphoto.com/photos/taj-majal-at-sunrise-in-agra-india-picture-id1152168512",
    price: "$130",
  },
  {
    id: 7,
    title: "Lizard7",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://media.istockphoto.com/photos/taj-majal-at-sunrise-in-agra-india-picture-id1152168512",
    price: "$120",
  },
  {
    id: 8,
    title: "Lizard8",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://media.istockphoto.com/photos/taj-majal-at-sunrise-in-agra-india-picture-id1152168512",
    price: "$110",
  },
  
];

const CardDisplay = () => {
  return (
    // <Container sx={{ flexGrow: 1 }}>
    //   <Stack
    //     direction={{ xs: "column", sm: "row" }}
    //     spacing={{ xs: 1, sm: 2, md: 4 }}
    //   >
    //     {products.map((product) => (
    //       <MDBCol item key={product.id} size="md" className="col-example">
    //       <CardData product={product} />
    //     </MDBCol>
    //     ))}
    //   </Stack>
    // </Container>
    <MDBContainer>
      <MDBRow>
        {products.map((product) => (
          <MDBCol item key={product.id} sm='6' md='4' lg='3' className="col-example">
            <CardData product={product} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default CardDisplay;


