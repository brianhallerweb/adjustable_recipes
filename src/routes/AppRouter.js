//@format
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import LebovitzVanillaIceCream from '../components/LebovitzVanillaIceCream';
import ChefStepsFruitCrumble from '../components/ChefStepsFruitCrumble';
import RedirectToHome from '../components/RedirectToHome';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        // Desserts
        <Route
          path="/lebovitzvanillaicecream"
          component={LebovitzVanillaIceCream}
        />
        <Route
          path="/chefstepsfruitcrumble"
          component={ChefStepsFruitCrumble}
        />
        <Route component={RedirectToHome} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
