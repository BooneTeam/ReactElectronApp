import React from 'react';
import { Router, Route, Link } from 'react-router'
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';
import Semantic from 'semantic-ui/dist/semantic.min.js';
import App from './App.jsx';
import NewEvent from './NewEvent.jsx';
import BasicDropdownMenu from './BasicDropdownMenu.jsx';

var rooms = [{content: "WhiteBoard", value: "Barton", name: "Barton"}, {
  content: "WhiteBoard",
  value: "Barton2",
  name: "Barton2"
}];

export default React.createClass({
  getDefaultProps() {
    return {
      task: {
        title: '',
        completed: false
      }
    };
  },


  componentDidMount(){
    $('.tag.example .ui.dropdown')
      .dropdown({
        allowAdditions: true
      })
    $('.sidebar .ui.dropdown')
      .dropdown({
        transition: "slide"
      })
  },

  render() {
    return (
      <div className="ui left vertical visible inverted sidebar labeled menu">
        <div className="item ui floating right dropdown">
          <i className="home icon"></i>
          <span className="text"> Rooms</span>
          <BasicDropdownMenu options={rooms}/>
        </div>
        <a className="item">
          <i className="smile icon"></i>
          People
        </a>
        <Link className="item" style={{color:'white'}} to={`/user/new`}>Add New User</Link>
        <Link className="item" style={{color:'white'}} to={`/user/8B38R5Nhrf/schedule`}>My Schedule</Link>
      </div>
    )
  }
})
