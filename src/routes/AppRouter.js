//@format
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import LebovitzVanillaIceCream from '../components/LebovitzVanillaIceCream';
import ChefStepsFruitCrumble from '../components/ChefStepsFruitCrumble';
import BasicPieCrust from '../components/BasicPieCrust';
import TartinePumpkinPie from '../components/TartinePumpkinPie';
import RedirectToHome from '../components/RedirectToHome';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        // Desserts
        <Route path="/chefstepspiecrust" component={BasicPieCrust} />
        <Route
          path="/lebovitzvanillaicecream"
          component={LebovitzVanillaIceCream}
        />
        <Route
          path="/chefstepsfruitcrumble"
          component={ChefStepsFruitCrumble}
        />
        <Route path="/tartinepumpkinpie" component={TartinePumpkinPie} />
        <Route component={RedirectToHome} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
