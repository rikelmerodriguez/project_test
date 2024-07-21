import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Delivery from './pages/Delivery';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';
import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/cart" component={Cart} />
        <Route path="/delivery" component={Delivery} />
        <Route path="/payment" component={Payment} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </Router>
  );
};

export default App;
