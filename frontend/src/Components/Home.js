import React from "react";
import NavigationBar from "./NavigationBar";
import CardDisplay from "./BottomBar/Card/CardDisplay";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Home() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Divider />
      <Box
        sx={{ width: 300 }}
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={2}
      >
        <Box gridColumn="span 1">
          <ListItem>
            <div>
              <h6>Avg. Customer Review</h6>
              <Rating name="half-rating-read" defaultValue={4} readOnly />
              <Rating name="half-rating-read" defaultValue={3} readOnly />
              <Rating name="half-rating-read" defaultValue={2} readOnly />
              <Rating name="half-rating-read" defaultValue={1} readOnly />
            </div>
          </ListItem>
          <Divider />

          <ListItem>
            <div>
              <h6>Price</h6>
              <p>Under ₹1,000</p>
              <p>₹1,000 - ₹5,000</p>
              <p>₹5,000 - ₹10,000</p>
              <p>₹10,000 - ₹20 K</p>
              <p>Over ₹20,000</p>
            </div>
          </ListItem>
          <Divider />
          <ListItem>
            <div>
              <FormControl component="fieldset">
                <h6>Discount</h6>
                <RadioGroup aria-label="gender" name="radio-buttons-group">
                  <FormControlLabel
                    value="10%"
                    control={<Radio />}
                    label=">10% off"
                  />
                  <FormControlLabel
                    value="20%"
                    control={<Radio />}
                    label=">20% off"
                  />
                  <FormControlLabel
                    value="30%"
                    control={<Radio />}
                    label=">30% off"
                  />
                  <FormControlLabel
                    value="40%"
                    control={<Radio />}
                    label=">40% off"
                  />
                  <FormControlLabel
                    value="50%"
                    control={<Radio />}
                    label=">50% off"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </ListItem>
          <Divider />

          <ListItem>
            <div>
              <h6>Discount</h6>
              <p>10% Off or more</p>
              <p>20% Off or more</p>
              <p>30% Off or more</p>
              <p>40% Off or more</p>
              <p>50% Off or more</p>
            </div>
          </ListItem>
          <Divider />
          <ListItem>
            <div>
              <h6>Avg. Customer Review</h6>
              <Rating name="half-rating-read" defaultValue={4} readOnly />
              <Rating name="half-rating-read" defaultValue={3} readOnly />
              <Rating name="half-rating-read" defaultValue={2} readOnly />
              <Rating name="half-rating-read" defaultValue={1} readOnly />
            </div>
          </ListItem>
          <Divider />

          <ListItem>
            <div>
              <h6>Discount</h6>
              <p>10% Off or more</p>
              <p>20% Off or more</p>
              <p>30% Off or more</p>
              <p>40% Off or more</p>
              <p>50% Off or more</p>
            </div>
          </ListItem>
          <Divider />
        </Box>
        <Box sx={{width:"80%"}}>
          <CardDisplay />
        </Box>
      </Box>
    </React.Fragment>
  );
}
