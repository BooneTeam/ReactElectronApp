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
import _ from 'lodash';
import moment from 'moment';

var WeeklySchedule = React.createClass({
  getInitialState: function () {
    return {};
  },

  //propTypes: {
  //  schedules: PropTypes.array.isRequired,
  //  onAddTask: function (e) {
  //    console.log(e)
  //  },
  //  onClear: PropTypes.func.isRequired
  //},

  handleClick: function (i) {

  },

  getDefaultProps() {
    var todaysDate = new Date()
    todaysDate.setDate(todaysDate.getDate());
    todaysDate.setHours(0);
    todaysDate.setMinutes(0);
    todaysDate.setSeconds(0);
    var weekStartDate = moment(todaysDate).startOf('week').toISOString();
    console.log('wtf')
    console.log(weekStartDate)
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
    var hours = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
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
          {hours.map(function (object, i) {
            var week = <tr key={object + i}>
              <td>{object}</td>
              <td>{_.where(schedules, {day: 0, hour: object}).map(function (object, i) {
                return <p key={object.event.test}>{object.event.test}</p>
              })}</td>
              <td>{_.where(schedules, {day: 1, hour: object}).map(function (object, i) {
                return <p key={object.event.test}>{object.event.test}</p>
              })}</td>
              <td>{_.where(schedules, {day: 2, hour: object}).map(function (object, i) {
                return <p>{object.event.test}</p>
              })}</td>
              <td>{_.where(schedules, {day: 3, hour: object}).map(function (object, i) {
                return <p>{object.event.test}</p>
              })}</td>
              <td>{_.where(schedules, {day: 4, hour: object}).map(function (object, i) {
                return <p>{object.event.test}</p>
              })}</td>
              <td>{_.where(schedules, {day: 5, hour: object}).map(function (object, i) {
                return <p>{object.event.test}</p>
              })}</td>
              <td>{_.where(schedules, {day: 6, hour: object}).map(function (object, i) {
                return <p>{object.event.test}</p>
              })}</td>
            </tr>;
            return week;
          })}
          </tbody>
        </table>
      </div>
    );
  }
});


export default WeeklySchedule;
