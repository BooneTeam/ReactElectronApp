import React, {PropTypes} from 'react';
import { Router, Route, Link } from 'react-router'
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import TaskList from './TaskList.jsx';
import InvertedMenuComponent from './InvertedMenuComponent.jsx';
import MultiSemanticDropdown from './MultiSemanticDropdown.jsx';
import BasicDropdownMenu from './BasicDropdownMenu.jsx';
import InvertedButtonWithDropdown  from './InvertedButtonWithDropdown.jsx';

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
  getInitialState: function () {
    return {
      users: [{name: 'Garrett'}]
    };
  },

  propTypes: {
    tasks: PropTypes.array.isRequired,
    onAddTask: function (e) {
      console.log(e)
    },
    onClear: PropTypes.func.isRequired
  },

  handleClick: function (i) {

  },


  getDefaultProps() {
    return {
      tasks: []
    }
  },


  componentDidMount(){
    $.get('http://localhost:3000/users', function (result) {
      //put this in a model or something
      var users = result.map(function (user) {
        return {name: user.firstName + ' ' + user.lastName}
      });
      if (this.isMounted()) {
        this.setState({
          users: users
        });
      }
    }.bind(this));


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
      <div className="pusher">
        <div className=''>
          <MultiSemanticDropdown options={this.state.users} title="Who's Invited"/>
          <MultiSemanticDropdown options={times} title="How Long Shall You Need?"/>

          <div className='available-days'>
            <div className="ui center aligned icon header">
              <i className="circular calendar icon"></i>
              Availability
            </div>

            <div className="ui teal buttons">
              <div className="ui button">This Week</div>
              <div className="ui floating dropdown icon button">
                <i className="dropdown icon"></i>
                <BasicDropdownMenu options={timeSpans}/>
              </div>
            </div>

            <div className="ui divided selection list">

              <a className="item">
                <div className="ui red horizontal label">Today</div>
                <InvertedButtonWithDropdown button_color="yellow" options={rooms}/>
                <InvertedButtonWithDropdown button_color="blue" options={rooms}/>
              </a>

              <a className="item">
                <div className="ui orange horizontal label">Tuesday</div>
                <InvertedButtonWithDropdown button_color="yellow" options={rooms}/>
                <InvertedButtonWithDropdown button_color="blue" options={rooms}/>
              </a>

              <a className="item">
                <div className="ui purple horizontal label">Wednesday</div>
                <InvertedButtonWithDropdown button_color="yellow" options={rooms}/>
                <InvertedButtonWithDropdown button_color="blue" options={rooms}/>
              </a>

              <a className="item">
                <div className="ui blue horizontal label">Thursday</div>
                <InvertedButtonWithDropdown button_color="yellow" options={rooms}/>
                <InvertedButtonWithDropdown button_color="blue" options={rooms}/>
              </a>

              <a className="item">
                <div className="ui green horizontal label">Friday</div>
                <InvertedButtonWithDropdown button_color="yellow" options={rooms}/>
                <InvertedButtonWithDropdown button_color="blue" options={rooms}/>
              </a>

            </div>
          </div>
        </div>

        <TaskList tasks={tasks}/>

        <Button onClick={this.handleClick.bind(this, '1')} bsStyle="primary">Add New</Button>
        <Button onClick={onClear} bsStyle="danger">Clear List</Button>

      </div>
    );
  }
});


export default App;
