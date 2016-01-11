import React, {PropTypes} from 'react';
import createFragment from 'react-addons-create-fragment';
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
import _ from 'lodash';

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
    console.log(todaysDate)
    var daysInMonth = moment(todaysDate).daysInMonth();
    var monthStartDate = moment(todaysDate).startOf('month').toString();
    var firstDayInMonthDayIndex = moment(todaysDate).startOf('month').day();
    var monthEndDate = moment(todaysDate).endOf('month').toString();


    console.log(daysInMonth)
    console.log(firstDayInMonthDayIndex)
    var monthDays = [];
    _.times(daysInMonth, function (n) {
      monthDays.push(moment(todaysDate).startOf('month').add(n, 'days'));

    });
    _.times(_.first(monthDays).day(), function (n) {
      console.log('-' + (n));
      var thisDay = moment(todaysDate).startOf('month').subtract((n + 1), 'days');
      monthDays.unshift(thisDay);
    });

    var dateRows = _.ceil(monthDays.length / 7);
    return {
      daysInMonth: daysInMonth,
      monthStartDate: monthStartDate,
      monthEndDate: monthEndDate,
      monthDays: monthDays,
      dateRows: dateRows,
      skips: 0,
      schedules: [],
      today: todaysDate.toString()
    }
  },


  componentDidMount(){
  },
  render()
  {
    let {schedules,today,daysInMonth,monthStartDate, monthEndDate,monthDays, dateRows, skips} = this.props;
    return (
      <div className="pusher">
        <table className="ui selectable celled structured table">
          <thead>
          <tr>
            <th style={{"width":"70px"}}>Sunday</th>
            <th style={{"width":"70px"}}>Monday</th>
            <th style={{"width":"70px"}}>Tuesday</th>
            <th style={{"width":"70px"}}>Wednesday</th>
            <th style={{"width":"70px"}}>Thursday</th>
            <th style={{"width":"70px"}}>Friday</th>
            <th style={{"width":"70px"}}>Saturday</th>
          </tr>
          </thead>
          <tbody>
          {_.times(dateRows, function (i) {
            var row =  <tr>
              {_.times(7, function (n) {
                if (monthDays[n + skips]) {
                  var events = _.where(schedules, {day: monthDays[n + skips].date()}).map(function (object, i) {
                    return <p key={object.event.test}>{object.event.test}</p>
                  });
                  var day = <td className='month-day' key={monthDays[n + skips].day()}><span className='month-date'>{monthDays[n + skips].date().toString()}
                    </span><span className='month-events'>{events}</span>
                  </td>
                };

                return day
              })}


            </tr>;
            skips = skips += 7;
            return row
          })}
          </tbody>
        </table>
      </div>
    );
  }
});


export default App;
