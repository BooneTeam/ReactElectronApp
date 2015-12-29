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
    var daysInMonth = moment(todaysDate, "YYYY-MM").daysInMonth()
    var daysInMonth = moment(todaysDate).startOf('month').toString()
    var daysInMonth = moment(todaysDate).endOf('month').toString()

    return {
      daysInMonth: daysInMonth,
      schedules: [],
      today: todaysDate.toString()
    }
  },


  componentDidMount(){
  },
  render()
  {
    let {schedules,today,daysInMonth} = this.props;
    return (
      <div className="pusher">
        <table className="ui selectable celled structured table">
          <thead>
          <tr>
            <th>Sun {daysInMonth}</th>
            <th>Mon</th>
            <th>Tues</th>
            <th>Wed</th>
            <th>Thurs</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td></tr>
          <tr>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td></tr>
          <tr>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td></tr>
          <tr>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td></tr>
          <tr>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td></tr>
          <tr>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td>
            <td style={{height:"70px",}}>asdf</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
});


export default App;
