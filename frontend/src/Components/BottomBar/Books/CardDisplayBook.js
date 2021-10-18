import React from "react";
import CardData from "../../CardData";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const products = [
  {
    id: 1,
    title: "Books1",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://www.incimages.com/uploaded_files/image/1920x1080/getty_598063032_349381.jpg",
    price: "$40",
  },
  {
    id: 2,
    title: "Books2",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "http://www.polytechnichub.com/wp-content/uploads/2017/04/Electronic.jpg",
    price: "$30",
  },
  {
    id: 3,
    title: "Books3",
    description:
      "Lizards are a  ranging across all continents except Antarctica.",
    image:
      "https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2020/01/Webp.net-resizeimage-29-1024x683.jpg",
    price: "$20",
  },
  {
    id: 4,
    title: "Games & Toys",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://www.thehindubusinessline.com/news/yfeu1c/article33980306.ece/ALTERNATES/LANDSCAPE_1200/bl04Funskool",
    price: "$10",
  },
  {
    id: 5,
    title: "Grocery",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://i.pinimg.com/736x/ae/e6/9d/aee69d611baea551d820fa80541dad2f.jpg",
    price: "$140",
  },
  {
    id: 6,
    title: "Furniture",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image: "https://www.woodenstreet.com/images/furniture/deal-1.jpg?v1",
    price: "$130",
  },
  {
    id: 7,
    title: "Footwear",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://www.compliancegate.com/wp-content/uploads/2020/01/shoes-footwear-regulations-us.jpg",
    price: "$120",
  },
  {
    id: 8,
    title: "Travel",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,0species, ranging across all continents except Antarctica.",
    image:
      "https://thumbs.dreamstime.com/b/travel-world-landmarks-background-blue-sky-46083021.jpg",
    price: "$110",
  },
];

const CardDisplayBook = () => {
  return (
    <>
      <h1>Books</h1>
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
    </>
  );
};

export default CardDisplayBook;
