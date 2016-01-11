import React from 'react';
import moment from 'moment';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';
import Semantic from 'semantic-ui/dist/semantic.min.js'
import App from './App.jsx'
import NewUser from './NewUser.jsx'
import InvertedMenuComponent from './InvertedMenuComponent.jsx'
import TopMenu from './TopMenu.jsx';
import SideBarNav from './SideBarNav.jsx';
import UserSchedule from './UserSchedule.jsx';
import _ from 'lodash'

var UserScheduleUI = React.createClass({

  setTimeSpanType: function (view) {
    this.setState({timeSpanType: view})
  },

  getInitialState: function () {
    return {
      timeSpanType: 'daily',
      schedules: []
    };
  },

  getDefaultProps() {
    var todaysDate = new Date()
    todaysDate.setDate(todaysDate.getDate());
    todaysDate.setHours(0);
    todaysDate.setMinutes(0);
    todaysDate.setSeconds(0);
    var daysInMonth = moment(todaysDate, "YYYY-MM").daysInMonth()
    var daysInMonth = moment(todaysDate).format("MMMM YYYY");
    return {
      daysInMonth: daysInMonth,
      schedules: []
    }
  },

  componentDidMount(){
    //put this in a model or something
    var todaysDate = new Date();
    todaysDate.setDate(todaysDate.getDate());
    todaysDate.setHours(-6);
    todaysDate.setMinutes(0);
    todaysDate.setSeconds(0);
    var daysInMonth = moment(todaysDate).daysInMonth();
    var monthStartDate = moment(todaysDate).startOf('month').toISOString();
    var firstDayInMonthDayIndex = moment(todaysDate).startOf('month').day();
    var monthEndDate = moment(todaysDate).endOf('month').toISOString();
    var weekStartDate = moment(todaysDate).startOf('week').toISOString();
    var weekEndDate = moment(todaysDate).endOf('week').toISOString();
    var todaysDateStartString = todaysDate.toISOString();
    var todaysDateEndString = moment(todaysDate).endOf('day').toISOString();

    $.get('http://localhost:3000/users/' + this.props.params.id + '/schedules?', {
      startDate: monthStartDate,
      endDate: monthEndDate
    }, function (result) {

      var weekSchedule = _.filter(result, function (obj, i) {
        return (_.gte(obj.onDate.iso, weekStartDate) && _.lte(obj.offDate.iso, weekEndDate) )
      });

      weekSchedule = _.transform(weekSchedule, function(result, n, key) {
        result[key] = result[key] || {day : '', hour :'', event : {}}
        result[key]['day'] = moment(n.onDate.iso).utc().day()
        result[key]['hour'] = moment(n.onDate.iso).utc().hour()
        result[key]['event'] = n
        return result
      });

      var daySchedule = _.filter(result, function (obj, i) {
        return (_.gte(obj.onDate.iso, todaysDateStartString) && _.lte(obj.offDate.iso, todaysDateEndString) )
      });

      var monthSchedule = _.filter(result, function (obj, i) {
        return (_.gte(obj.onDate.iso, monthStartDate) && _.lte(obj.offDate.iso, monthEndDate) )
      });


      monthSchedule = _.transform(monthSchedule, function(result, n, key) {
        result[key] = result[key] || {day : '', hour :'', event : {}}
        result[key]['day'] = moment(n.onDate.iso).utc().date()
        result[key]['hour'] = moment(n.onDate.iso).utc().hour()
        result[key]['event'] = n
        return result
      });

      var schedules = {monthly: monthSchedule, weekly: weekSchedule, daily: daySchedule};

      //console.log(todaysDateEndString)
      //console.log(weekEndDate)
      //console.log('week')
      //console.log(weekSchedule)
      //console.log('day')
      //console.log(daySchedule)
      //console.log('month')
      //console.log(monthSchedule)

      //var schedules = result.map(function (schedule) {
      //  return schedule
      //});

      if (this.isMounted()) {
        this.setState({
          schedules: schedules
        });
      }
    }.bind(this));
  },
  render()
  {
    let {schedules, timeSpanType, daysInMonth} = this.props;
    return (
      <div className="ui main text container">
        <TopMenu />
        <SideBarNav />

        <div className="pusher">
          <div className="ui compact menu">
            <a className="item" onClick={this.setTimeSpanType.bind(null, "daily")}>
              <i className="icon sun"></i> Daily
              <div className="floating ui teal label">{this.state.schedules['daily'] ? this.state.schedules['daily'].length : 0}</div>
            </a>
            <a className="item" onClick={this.setTimeSpanType.bind(null, "weekly")}>
              <i className="icon cubes"></i> Weekly
              <div className="floating ui teal label">{this.state.schedules['weekly'] ? this.state.schedules['weekly'].length : 0}</div>
            </a>
            <a className="item" onClick={this.setTimeSpanType.bind(null, "monthly")}>
              <i className="icon calendar"></i> Monthly
              <div className="floating ui teal label">{this.state.schedules['monthly'] ? this.state.schedules['monthly'].length : 0}</div>
            </a>
          </div>
          <div className="" style={{float:"right"}}>
            <h3>{daysInMonth}</h3>
          </div>
        </div>
        <UserSchedule schedules={this.state.schedules[this.state.timeSpanType]} timeSpanType={this.state.timeSpanType}/>;
      </div>
    );
  },
});


export default UserScheduleUI;
