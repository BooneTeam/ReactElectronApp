import React from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';
import Semantic from 'semantic-ui/dist/semantic.min.js';
import App from './App.jsx';
import NewEvent from './NewEvent.jsx';
import SideBarNav from './SideBarNav.jsx';

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
      });
  },

  render() {
    //return (
        //<div className="ui main text container">
        //  <SideBarNav />
        //</div>
    //);
  },
});
