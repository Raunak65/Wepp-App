import './App.css';
import React from "react";
import NavigationBar from './Components/NavigationBar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Carousels from './Components/Carousels';
import AllProducts from './Components/AllProducts';
import Books from './Components/Books';
import Electronics from './Components/Electronics';
import Fashion from './Components/Fashion';
import Furniture from './Components/Furniture';
import Travel from './Components/Travel';
import ToysGames from './Components/ToysGames';
import Footwear from './Components/Footwear';
import Grocery from './Components/Grocery';

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <React.Fragment>
            <div className="App">
              <NavigationBar />
              {/* <Carousels /> */}
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
