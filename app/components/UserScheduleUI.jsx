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
import UserSchedule from './UserSchedule.jsx';
import moment from 'moment'

var UserScheduleUI = React.createClass({

  setTimeSpanType: function(view){
    this.setState({timeSpanType:view})
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
      daysInMonth : daysInMonth,
      schedules: []
    }
  },

  componentDidMount(){
    $.get('http://localhost:3000/users/' + this.props.params.id + '/schedules', function (result) {
      //put this in a model or something
      console.log(result)
      var schedules = result.map(function (schedule) {
        return schedule
      });
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
              <div className="floating ui teal label">{this.state.schedules ? this.state.schedules.length : 0}</div>
            </a>
            <a className="item" onClick={this.setTimeSpanType.bind(null, "weekly")}>
              <i className="icon cubes"></i> Weekly
              <div className="floating ui teal label">8</div>
            </a>
            <a className="item" onClick={this.setTimeSpanType.bind(null, "monthly")}>
              <i className="icon calendar"></i> Monthly
              <div className="floating ui teal label">22</div>
            </a>
          </div>
          <div className="" style={{float:"right"}}>
            <h3>{daysInMonth}</h3>
          </div>
        </div>
          <UserSchedule schedules={this.state.schedules} timeSpanType={this.state.timeSpanType}/>;
      </div>
    );
  },
});


export default UserScheduleUI;
