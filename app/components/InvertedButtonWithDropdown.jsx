import React from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';
import Semantic from 'semantic-ui/dist/semantic.min.js'
import BasicDropdownMenu from './BasicDropdownMenu.jsx';

export default React.createClass({
  getDefaultProps() {
    return {
      task: {
        title: '',
        completed: false
      }
    };
  },

  handleToggle(task) {
    if (this.refs.checkbox.getDOMNode().checked) {
      ActionCreator.completeTask(task);
    }
  },

  componentDidMount(){
    $('.tag.example .ui.dropdown')
      .dropdown({
        allowAdditions: true
      })
  },

  componentDidUpdate(){
    $('.ui.dropdown').dropdown('refresh');

    $('.tag.example .ui.dropdown')
      .dropdown({
        allowAdditions: true
      })

  },

  render() {
    return (
        <div className={"ui " + this.props.button_color + " inverted buttons"}>
          <div className="ui button">AM <i>2 Rooms</i></div>
          <div className="ui floating dropdown icon button">
            <i className="dropdown icon"></i>
            <BasicDropdownMenu options={this.props.options}/>
          </div>
        </div>
    );
  },

});
