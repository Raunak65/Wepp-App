import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CardData=({product})=>{
  return (
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {product.title}
            <h6>{product.price}</h6>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="error">
          View
        </Button>
        <IconButton size="small" aria-label="open drawer" sx={{ mr: 2 }}>
          <AddShoppingCartIcon
          // onClick={toggleDrawer("left", true)}
          />
        </IconButton>
        <IconButton size="small" aria-label="open drawer" sx={{ mr: 2 }}>
          <FavoriteBorderIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CardData;

