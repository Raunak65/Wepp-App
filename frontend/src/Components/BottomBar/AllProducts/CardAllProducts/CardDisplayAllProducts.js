import React from "react";
import CardData from "./CardDataAllProducts";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const products = [
  {
    id: 1,
    title: "Books",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://www.incimages.com/uploaded_files/image/1920x1080/getty_598063032_349381.jpg",

    destination: "books",
  },
  {
    id: 2,
    title: "Electronics",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "http://www.polytechnichub.com/wp-content/uploads/2017/04/Electronic.jpg",
    destination: "electronics",
  },
  {
    id: 3,
    title: "Fashion",
    description:
      "Lizards are a  ranging across all continents except Antarctica.",
    image:
      "https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2020/01/Webp.net-resizeimage-29-1024x683.jpg",
    destination: "fashion",
  },
  {
    id: 4,
    title: "Games & Toys",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://www.thehindubusinessline.com/news/yfeu1c/article33980306.ece/ALTERNATES/LANDSCAPE_1200/bl04Funskool",
    destination: "toysgames",
  },
  {
    id: 5,
    title: "Grocery",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://i.pinimg.com/736x/ae/e6/9d/aee69d611baea551d820fa80541dad2f.jpg",
    destination: "grocery",
  },
  {
    id: 6,
    title: "Furniture",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image: "https://www.woodenstreet.com/images/furniture/deal-1.jpg?v1",
    destination: "furniture",
  },
  {
    id: 7,
    title: "Footwear",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://www.compliancegate.com/wp-content/uploads/2020/01/shoes-footwear-regulations-us.jpg",
    destination: "footwear",
  },
  {
    id: 8,
    title: "Travel",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://thumbs.dreamstime.com/b/travel-world-landmarks-background-blue-sky-46083021.jpg",
    destination: "travel",
  },
];

const CardDisplayAllProducts = () => {
  return (
    <MDBContainer>
      <MDBRow>
        {products.map((product) => (
          <MDBCol
            item
            key={product.id}
            sm="6"
            md="4"
            lg="3"
            className="col-example "
          >
            <CardData product={product} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default CardDisplayAllProducts;


