import React, {PropTypes} from 'react';
import { Router, Route, Link } from 'react-router'
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import TaskList from '../components/TaskList.jsx';
import InvertedMenuComponent from '../components/InvertedMenuComponent.jsx';
import MultiSemanticDropdown from '../components/MultiSemanticDropdown.jsx';
import BasicDropdownMenu from '../components/BasicDropdownMenu.jsx';
import InvertedButtonWithDropdown  from '../components/InvertedButtonWithDropdown.jsx';

var users = ['Garrett', 'TJ', 'Sean'];
users = users.map(function (obj, idx) {
  return {name: obj}
});
var times = ['10 Minutes', '20 Minutes', '30 Minutes']
times = times.map(function (obj, idx) {
  return {name: obj}
});

var timeSpans = ['Next Week', 'Two Weeks From Now', 'Custom Date']

timeSpans = timeSpans.map(function (obj, idx) {
  return {name: obj}
});

var rooms = [{content: "3 TV's, Projector, WhiteBoard", value: "Alamo", name: "Alamo"},
  {content: "3 TV's, Projector", value: "Longhorn", name: "Longhorn"},
  {content: "3 TV's, Phone", value: "Conf", name: "Conf"},
  {content: "WhiteBoard", value: "Barton", name: "Barton"}];


var App = React.createClass({
  propTypes: {
    tasks: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
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
  let {onAddTask, onClear, tasks} = this.props;
  return (
    <div>
    Potato
    </div>
);
}
});


export default App;
