import React from 'react';
import {Router, Route, Link} from 'react-router';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';
import Semantic from 'semantic-ui/dist/semantic.min.js'
import App from './App.jsx'
import NewEvent from './NewEvent.jsx'

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
  },
//<div className='fixed-right'><a href="#" className="item right">Get A Room</a>
//</div>
  render() {
    return (
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <div className="fixed-left">
            <div href="#" className="header item">
              <img className="logo" src="images/logo.png"/>< Link to={`/`} style={{marginLeft:'5px'}}>Booker</Link>
            </div>
          </div>
          <div className="right item">
            <a className="ui inverted button">Log in</a>
            <a className="ui inverted button">Sign Up</a>
          </div>
        </div>
      </div>
    )
  }
})
