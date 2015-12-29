import moment from 'moment';
import React from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';
import Semantic from 'semantic-ui/dist/semantic.min.js'

var ListItemWrapper = React.createClass({
  render: function () {
    return <option value={this.props.data.name}>{this.props.data.name}</option>
  }
});

export default React.createClass({
  getDefaultProps() {
    return {};
  },

  componentDidMount(){
    $('.ui.accordion').accordion();
  },

  componentDidUpdate(){
    $('.ui.accordion').accordion();
  },


  render() {
    let {schedule} = this.props;
    return (
      <div className="three-side-box">
        <div className="title">
          <i className="dropdown icon"></i>{schedule.test}
        </div>
        <div className="content">
          <div className="ui label">
            <i className="trash icon"></i> Remove From Schedule
          </div>
          <div className="ui label">
            <i className="users icon"></i> People In This Event
          </div>
          <div className="" style={{marginTop:"1em"}}>This Is What is going on in this meeting.
            Some Things Are Going to go the end of the page and this is ok. Or is it? what do we want it to look like.
            What if it's even more than that? Like this or even like this long?
          </div>
        </div>
        <div>
          <a className="ui green basic label">{moment(schedule.onDate.iso).format("h:mm a")}</a>
          <a className="ui red basic label">{moment(schedule.offDate.iso).format("h:mm a")}</a>
        </div>
      </div>
    );
  },

});
