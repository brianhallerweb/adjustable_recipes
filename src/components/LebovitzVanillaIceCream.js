//@format
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class LebovitzVanillaIceCream extends Component {
  constructor(props) {
    super(props);
    this.original = {
      ingredient1: 1,
      ingredient2: 3 / 4,
      ingredient3: 1,
      ingredient4: 2,
      ingredient5: 6,
      ingredient6: 1,
    };
    this.state = {
      ingredient1: 1,
      ingredient2: 3 / 4,
      ingredient3: 1,
      ingredient4: 2,
      ingredient5: 6,
      ingredient6: 1,
    };
  }

  async updateIngredients(name, value) {
    console.log('update not working yet');
    //await this.setState({[name]: value});
    //const proportion = this.state[name] / this.original[name];
    //for (let ingredient in this.original) {
    //if (name === ingredient) {
    //continue;
    //}
    //const newValue = this.roundToQuarterGram(
    //this.original[ingredient] * proportion,
    //);
    //this.setState({[ingredient]: newValue});
    //}
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
        <h3>David Lebovitz Vanilla Ice Cream</h3>
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
            cup whole milk
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
            cup Sugar
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
            vanilla bean (split lengthwise)
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
            cup heavy cream
          </li>
          <li>
            <input
              style={{width: 60}}
              type="number"
              name="ingredient5"
              value={this.state.ingredient5}
              onChange={e =>
                this.updateIngredients(e.target.name, e.target.value)
              }
            />
            egg yolks (I prefer half the yokes)
          </li>
          <li>
            <input
              style={{width: 60}}
              type="number"
              name="ingredient6"
              value={this.state.ingredient6}
              onChange={e =>
                this.updateIngredients(e.target.name, e.target.value)
              }
            />
            tsp vanilla extract
          </li>
          <li>pinch of salt</li>
        </ul>

        <p>Directions</p>
        <ol>
          <li>
            Heat the milk, 1 cup cream, salt, and sugar in a saucepan until
            sugar dissolves. Remove from heat, add the vanilla bean, and infuse
            for one hour.
          </li>
          <li>
            In a separate bowl, stir together the egg yolks. Rewarm the milk
            then gradually pour some of the milk into the yolks, whisking
            constantly as you pour. Scrape the warmed yolks and milk back into
            the saucepan.
          </li>
          <li>
            Cook over low heat, stirring constantly and scraping the bottom with
            a heat-resistant spatula, until the custard thickens enough to coat
            the spatula, or temp reads 170F.
          </li>
          <li>
            Strain the custard into the heavy cream. Stir over the ice until
            cool, add the vanilla extract, then refrigerate to chill thoroughly.
            Preferably overnight.
          </li>
          <li>Remove the vanilla bean and churn.</li>
        </ol>
      </div>
    );
  }
}

export default LebovitzVanillaIceCream;
