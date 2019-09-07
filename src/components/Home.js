//@format
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Desserts</h3>
        <div>
          <Link to={'/lebovitzvanillaicecream'}>
            Devid Lebovitz Vanilla Ice Cream
          </Link>
        </div>
        <div>
          <Link to={'/chefstepsfruitcrumble'}>Chef steps fruit crumble</Link>
        </div>
        <div>
          <Link to={'/chefstepspiecrust'}>Chef steps pie crust</Link>
        </div>
      </div>
    );
  }
}

export default Home;
