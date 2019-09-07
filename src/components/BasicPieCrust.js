//@format
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class BasicPieCrust extends Component {
  constructor(props) {
    super(props);
    this.original = {
      ingredient1: 250,
      ingredient2: 205,
      ingredient3: 3,
      ingredient4: 55,
    };
    this.state = {
      ingredient1: 250,
      ingredient2: 205,
      ingredient3: 3,
      ingredient4: 55,
    };
  }

  async updateIngredients(name, value) {
    await this.setState({[name]: value});
    const proportion = this.state[name] / this.original[name];
    for (let ingredient in this.original) {
      if (name === ingredient) {
        continue;
      }
      const newValue = this.roundToQuarterGram(
        this.original[ingredient] * proportion,
      );
      this.setState({[ingredient]: newValue});
    }
  }

  roundToQuarterGram(number) {
    const noDecimalNumber = Math.round(number);
    let decimal = number - noDecimalNumber;
    if (decimal < 0.13) {
      decimal = 0;
    } else if (decimal < 0.37) {
      decimal = 0.25;
    } else if (decimal < 0.62) {
      decimal = 0.5;
    } else if (decimal < 0.87) {
      decimal = 0.75;
    } else {
      decimal = 1;
    }
    return noDecimalNumber + decimal;
  }

  render() {
    return (
      <div>
        <h3>Chef Steps Basic Pie Crust</h3>
        <p>ingredients</p>
        <ul>
          <li>
            <input
              style={{width: 60}}
              type="number"
              name="ingredient1"
              value={this.state.ingredient1}
              onChange={e =>
                this.updateIngredients(e.target.name, e.target.value)
              }
            />
            g bread flour
          </li>
          <li>
            <input
              style={{width: 60}}
              type="number"
              name="ingredient2"
              value={this.state.ingredient2}
              onChange={e =>
                this.updateIngredients(e.target.name, e.target.value)
              }
            />
            g butter
          </li>
          <li>
            <input
              style={{width: 60}}
              type="number"
              name="ingredient3"
              value={this.state.ingredient3}
              onChange={e =>
                this.updateIngredients(e.target.name, e.target.value)
              }
            />
            g salt
          </li>
          <li>
            <input
              style={{width: 60}}
              type="number"
              name="ingredient4"
              value={this.state.ingredient4}
              onChange={e =>
                this.updateIngredients(e.target.name, e.target.value)
              }
            />
            g water
          </li>
        </ul>

        <p>Directions</p>
        <ol>
          <li>Place flour, salt, and cubes of butter in a stand mixer bowl</li>
          <li>
            Put the entire bowl + paddle into the refridgerator to cool for
            awhile
          </li>
          <li>Mix the bowl until the butter breaks up into coarse crumbs</li>
          <li>Add ice water and keep mixing until smooth</li>
          <li>
            {' '}
            Remove dough from mixing bowl and form into smooth ball. Flour hands
            and board as needed. Press ball into a disk about 4 cm thick. Wrap
            with plastic and refrigerate for at least four hours. This keeps the
            dough from shrinking, warping, and pulling away from the pan when
            you bake it. If you don’t care about that, this step is optional.
          </li>
          <li>
            Roll dough out on floured surface until about 3 mm thick. Mold dough
            into desired shape in baking dish. Fold edges under the sides of the
            dish and trim excess. Refrigerate, uncovered, for at least one hour.
            Overnight is best. If you do this, cover in plastic wrap after one
            hour, once the dough has hardened.
          </li>
          <li>
            If making pecan or apple pie, add filling to dough and bake as
            needed. For quiche, pumpkin pie, and other liquidy fillings,
            continue to the next step and blind bake to ensure a flaky, crispy
            crust. Then fill and bake as needed.
          </li>
          <li>
            Place weights on dough. (We line it with aluminum foil and pour in
            dry beans.) Bake at 392 °F / 200 °C for 20 minutes. Remove weights.
            Bake another five minutes for a perfectly crispy, flaky crust.
          </li>
        </ol>
      </div>
    );
  }
}

export default LebovitzVanillaIceCream;
