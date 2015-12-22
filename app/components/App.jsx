import React, {PropTypes} from 'react';
import { Router, Route, Link } from 'react-router'
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import TaskList from './TaskList.jsx';
import InvertedMenuComponent from './InvertedMenuComponent.jsx';
import MultiSemanticDropdown from './MultiSemanticDropdown.jsx';
import BasicDropdownMenu from './BasicDropdownMenu.jsx';
import InvertedButtonWithDropdown  from './InvertedButtonWithDropdown.jsx';

var users = ['Garrett', 'TJ', 'Sean'];
users = users.map(function (obj, idx) {
  return {name: obj, key:idx}
});
var times = ['10 Minutes', '20 Minutes', '30 Minutes']
times = times.map(function (obj, idx) {
  return {name: obj, key:idx}
});

var timeSpans = ['Next Week', 'Two Weeks From Now', 'Custom Date']

timeSpans = timeSpans.map(function (obj, idx) {
  return {name: obj, key:idx}
});

var rooms = [{key:'Alamo', content: "3 TV's, Projector, WhiteBoard", value: "Alamo", name: "Alamo"},
  {key:'Longhorn', content: "3 TV's, Projector", value: "Longhorn", name: "Longhorn"},
  {key:'Conf', content: "3 TV's, Phone", value: "Conf", name: "Conf"},
  {key:'Barton', content: "WhiteBoard", value: "Barton", name: "Barton"}];


var App = React.createClass({
  propTypes: {
    tasks: PropTypes.array.isRequired,
    onClear: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      tasks: []
    }
  },


  componentDidMount(){

    $('.tag.example .ui.dropdown')
      .dropdown({
        allowAdditions: true
      })

    $('.teal.buttons .dropdown')
      .dropdown({
        transition: 'drop'
      });

    $('.yellow.buttons .dropdown')
      .dropdown({
        // you can use any ui transition
        transition: 'drop'
      });

    $('.blue.buttons .dropdown')
      .dropdown({
        // you can use any ui transition
        transition: 'drop'
      });

    $('.selection .ui.button .menu .item')
      .popup({
        inline: true,
        hoverable: true,
        position: 'bottom left',
        delay: {
          show: 300,
          hide: 800
        }
      });
  },
  render()
  {
    //let {onAddTask, onClear, tasks} = this.props;
    return (
      <div>
        Potato
      </div>
    );
  }
});


export default App;
