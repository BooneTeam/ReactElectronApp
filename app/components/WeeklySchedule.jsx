import React, {PropTypes} from 'react';
import { Router, Route, Link } from 'react-router'
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import TaskList from './TaskList.jsx';
import InvertedMenuComponent from './InvertedMenuComponent.jsx';
import MultiSemanticDropdown from './MultiSemanticDropdown.jsx';
import BasicDropdownMenu from './BasicDropdownMenu.jsx';
import InvertedButtonWithDropdown  from './InvertedButtonWithDropdown.jsx';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListedEvent from './ListedEvent.jsx';
import moment from 'moment';

var App = React.createClass({
  getInitialState: function () {
    return {};
  },

  propTypes: {
    schedules: PropTypes.array.isRequired,
    onAddTask: function (e) {
      console.log(e)
    },
    onClear: PropTypes.func.isRequired
  },

  handleClick: function (i) {

  },

  getDefaultProps() {
    var todaysDate = new Date()
    todaysDate.setDate(todaysDate.getDate());
    todaysDate.setHours(0);
    todaysDate.setMinutes(0);
    todaysDate.setSeconds(0);
    return {

      schedules: [],
      today: todaysDate.toString()
    }
  },


  componentDidMount(){
  },
  render()
  {
    let {schedules,today} = this.props;
    return (
      <div className="pusher">
        <table className="ui selectable celled structured table">
          <thead>
          <tr>
            <th>Time</th>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tues</th>
            <th>Wed</th>
            <th>Thurs</th>
            <th>Fri</th>
            <th>Saturday</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>{"Sunday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Tuesday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Wednesday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Thursday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Friday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Saturday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr className="warning">
            <td>4</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>6</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>7</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>8</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>9</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr className="warning">
            <td>10</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>11</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>12</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>1</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr className="warning">
            <td>4</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>6</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>7</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>8</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>9</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr className="warning">
            <td>10</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>11</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          <tr>
            <td>12</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
            <td>{"Monday 1 O'clock Events".substring(0, 10)}...</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
});


export default App;
