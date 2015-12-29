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
import DailySchedule from './DailySchedule.jsx';
import WeeklySchedule from  './WeeklySchedule.jsx';
import MonthlySchedule from  './MonthlySchedule.jsx';

var App = React.createClass({
  getTimeSpanType: function (span) {
    switch (span) {
      case "daily":
        return
      case "daily":
        return <UserSchedule schedules={this.state.schedules}/>;
      case "daily":
        return <UserSchedule schedules={this.state.schedules}/>;
    }
  },

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
    let {onAddTask, onClear, schedules,today, timeSpanType} = this.props;
    console.log(schedules)
    console.log(this.props.timeSpanType)
    if (schedules.length > 0) {
      if (this.props.timeSpanType === 'daily') {
        return (
          <DailySchedule schedules={schedules}/>
        );
      }
      if (this.props.timeSpanType === 'weekly') {
        return (
          <WeeklySchedule schedules={schedules}/>
        );
      }
      if (this.props.timeSpanType === 'monthly') {
        return (
          <MonthlySchedule schedules={schedules}/>
        );
      }
      else {
        return (
          <div className="pusher">
            <h2>You've Got Nothin' Scheduled :) You're Free!!</h2>
          </div>
        );
      }
    } else {
      return (
        <div>Boogers</div>
      )
    }
  }
});


export default App;
