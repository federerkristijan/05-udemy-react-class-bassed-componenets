import { Component } from 'react';
import classes from './User.module.css';

// class component need import Component and pas on props with 'this.'
class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
