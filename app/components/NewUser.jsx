import React, {PropTypes} from 'react';
import { Router, Route, Link } from 'react-router'
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import TaskList from './TaskList.jsx';
import InvertedMenuComponent from './InvertedMenuComponent.jsx';
import MultiSemanticDropdown from './MultiSemanticDropdown.jsx';
import BasicDropdownMenu from './BasicDropdownMenu.jsx';
import InvertedButtonWithDropdown  from './InvertedButtonWithDropdown.jsx';

var App = React.createClass({

  getInitialState: function () {
    return {
      user: {
        firstName: 'Peter',
        lastName: '',
        username: '',
        password: 'password'
      }
    };
  },

  addUser: function (user) {
    $.post('http://localhost:3000/users', user, function (result) {
    })
  },

  onChange: function (object,event) {
    object[event.target.name] = event.target.value;
    this.setState(object);
  },


  getDefaultProps() {
    return {
      user: {}
    }
  },

  componentDidMount(){

  },
  render()
  {
    let {onAddTask, onClear, tasks} = this.props;
    return (
      <div className="pusher">
        <form className="ui form">
          <div className="field">
            <label>First Name</label>
            <input type="text" name="firstName" defaultValue={this.state.user.firstName} onChange={this.onChange.bind(this,this.state.user)}
                   placeholder="First Name"/>
          </div>
          <div className="field">
            <label>Last Name</label>
            <input type="text" name="lastName" defaultValue={this.state.user.lastName} onChange={this.onChange.bind(this,this.state.user)}
                   placeholder="Last Name"/>
          </div>
          <div className="field">
            <label>Team</label>
            <input type="text" name="username" defaultValue={this.state.user.username}
                   onChange={this.onChange.bind(this,this.state.user)} placeholder="Team"/>
          </div>
          <button className="ui button" type="button" onClick={this.addUser.bind(this, this.state.user)}>Submit</button>
        </form>
      </div>
    );
  }
});


export default App;
