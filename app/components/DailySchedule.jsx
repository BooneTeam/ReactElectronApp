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
        <div className="ui equal width stretched grid">
          <div className="column">
            <div className="ui segment">
              <a className="ui right pointing basic violet ribbon label">Today : {today}</a>
              <ListGroup>
                <div className="ui accordion">
                  {schedules.map(function (schedule) {
                    return <ListedEvent schedule={schedule}/>
                  })}
                </div>
              </ListGroup>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


export default App;
