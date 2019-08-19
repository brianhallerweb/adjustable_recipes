//@format
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class ChefStepsFruitCrumble extends Component {
  constructor(props) {
    super(props);
    this.original = {
      ingredient1: 1500,
      ingredient2: 300,
      ingredient3: 20,
      ingredient4: 30,
      ingredient5: 12,
      ingredient6: 150,
      ingredient7: 150,
      ingredient8: 150,
      ingredient9: 1,
    };
    this.state = {
      ingredient1: 1500,
      ingredient2: 300,
      ingredient3: 20,
      ingredient4: 30,
      ingredient5: 12,
      ingredient6: 150,
      ingredient7: 150,
      ingredient8: 150,
      ingredient9: 1,
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
    const noDecimalNumber = Math.trunc(number);
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
        <h3>Chef steps fruit crumble</h3>
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
            g fresh fruit
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
            g Sugar
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
            g Cornstarch
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
            g Lemon juice
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
            g Salt
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
            g Organic rolled oats
          </li>
          <li>
            <input
              style={{width: 60}}
              type="number"
              name="ingredient7"
              value={this.state.ingredient7}
              onChange={e =>
                this.updateIngredients(e.target.name, e.target.value)
              }
            />
            g Almond flour
          </li>
          <li>
            <input
              style={{width: 60}}
              type="number"
              name="ingredient8"
              value={this.state.ingredient8}
              onChange={e =>
                this.updateIngredients(e.target.name, e.target.value)
              }
            />
            g Unsalted butter
          </li>
          <li>
            <input
              style={{width: 60}}
              type="number"
              name="ingredient9"
              value={this.state.ingredient9}
              onChange={e =>
                this.updateIngredients(e.target.name, e.target.value)
              }
            />
            Egg yolk
          </li>
        </ul>

        <p>prepare the fruit</p>
        <ul>
          <li>{this.state.ingredient1}g fresh fruit</li>
          <li>{this.state.ingredient2}g Sugar</li>
          <li>{this.state.ingredient3}g Cornstarch</li>
          <li>{this.state.ingredient4}g Lemon juice</li>
          <li>{this.state.ingredient5}g salt</li>
        </ul>

        <p>prepare the crumble</p>
        <ul>
          <li>{this.state.ingredient6}g rolled oats</li>
          <li>{this.state.ingredient7}g almond flour</li>
          <li>{this.state.ingredient8}g unsalted butter</li>
          <li>{this.state.ingredient2}g sugar</li>
          <li>{this.state.ingredient5}g salt</li>
          <li>{this.state.ingredient9}g egg yolk</li>
        </ul>

        <p>Cook at 350 for about an hour</p>
        <p>
          Tip: If fruit mixture is very liquid, try reducing it to remove excess
          water and concentrate flavor.
        </p>
      </div>
    );
  }
}

export default ChefStepsFruitCrumble;
