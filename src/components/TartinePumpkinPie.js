//@format
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class TartinePumpkinPie extends Component {
  constructor(props) {
    super(props);
    this.original = {
      ingredient1: 2,
      ingredient2: 3,
      ingredient3: 1,
      ingredient4: 1,
      ingredient5: 2,
      ingredient6: 0.5,
      ingredient7: 1.5,
      ingredient8: 1,
      ingredient9: 1,
    };
    this.state = {
      ingredient1: 2,
      ingredient2: 3,
      ingredient3: 1,
      ingredient4: 1,
      ingredient5: 2,
      ingredient6: 0.5,
      ingredient7: 1.5,
      ingredient8: 1,
      ingredient9: 1,
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
        <h3>Tartine Pumpkin Pie</h3>
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
            cups Libby's pumpkin puree
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
            large eggs
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
            egg yolk
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
            cups heavy cream
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
            tbps brandy or rum
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
            light brown sugar (packed)
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
            tsp cinnamon
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
            tsp ginger
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
            tbps melted butter
          </li>
          <li>pinch of salt, cloves, and nutmeg</li>
        </ul>

        <p>Directions</p>
        <ol>
          <li>put pumpkin in bowl, add cinnamon, ginger and salt - mix well</li>
          <li>beat eggs separately and then add to pumpkin</li>
          <li>heat cream and dissolve sugar</li>
          <li>add cream/sugar to pumpkin</li>
        </ol>
      </div>
    );
  }
}

export default TartinePumpkinPie;
