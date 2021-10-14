import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BottomBar() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="All Products" {...a11yProps(0)} />
          <Tab label="Books" {...a11yProps(1)} />
          <Tab label="Electronics" {...a11yProps(2)} />
          <Tab label="Fashion" {...a11yProps(3)} />
          <Tab label="Toys & Games" {...a11yProps(4)} />
          <Tab label="Grocery" {...a11yProps(5)} />
          <Tab label="Furniture" {...a11yProps(6)} />
          <Tab label="Footwear" {...a11yProps(7)} />
          <Tab label="Travel" {...a11yProps(8)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          All Products
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Books
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Electronics
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Fashion
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Toys & Games
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          Grocery
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          Furniture
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
          Footwear
        </TabPanel>
        <TabPanel value={value} index={8} dir={theme.direction}>
          Travel
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
