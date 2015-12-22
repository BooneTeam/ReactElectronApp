import React from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';
//import MultiSemanticDropdown from './MultiSemanticDropdown.jsx';


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
      <p key={this.props.key}>{this.props.task.title}</p>
    );
  },
});
