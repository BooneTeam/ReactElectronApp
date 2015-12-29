import React from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';
import Semantic from 'semantic-ui/dist/semantic.min.js'
import App from './App.jsx'
import NewUser from './NewUser.jsx'
import InvertedMenuComponent from './InvertedMenuComponent.jsx'
import TopMenu from './TopMenu.jsx';
import SideBarNav from './SideBarNav.jsx';

export default React.createClass({
  getDefaultProps() {
    return {

    };
  },


  componentDidMount(){
    $('.tag.example .ui.dropdown')
      .dropdown({
        allowAdditions: true
      })
  },

  render() {
    return (
      <div className="ui main text container">
        <TopMenu />
        <SideBarNav />
        <NewUser />
      </div>
    );
  },
});
