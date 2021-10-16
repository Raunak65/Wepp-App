import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllProducts from "./Components/BottomBar/AllProducts/AllProducts";
import Books from "./Components/BottomBar/Books/Books";
import Electronics from "./Components/BottomBar/Electronics/Electronics";
import Fashion from "./Components/BottomBar/Fashion/Fashion";
import Furniture from "./Components/BottomBar/Furniture/Furniture";
import Travel from "./Components/BottomBar/Travel/Travel";
import ToysGames from "./Components/BottomBar/Toysgames/ToysGames";
import Footwear from "./Components/BottomBar/Footwear/Footwear";
import Grocery from "./Components/BottomBar/Grocery/Grocery";
import Home from './Components/Home';

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <React.Fragment>
            <div className="App">
              <Home />
              <Switch>
                <Route exact path="/allproducts" component={AllProducts} />
                <Route exact path="/books" component={Books} />
                <Route exact path="/electronics" component={Electronics} />
                <Route exact path="/fashion" component={Fashion} />
                <Route exact path="/toysgames" component={ToysGames} />
                <Route exact path="/grocery" component={Grocery} />
                <Route exact path="/furniture" component={Furniture} />
                <Route exact path="/footwear" component={Footwear} />
                <Route exact path="/travel" component={Travel} />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
