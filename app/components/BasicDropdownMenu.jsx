import React from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';
import Semantic from 'semantic-ui/dist/semantic.min.js'


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
      <div className="menu">
        {this.props.options.map(option =>
            <div className="item" key={option.name} data-content={option.content}
                 data-value={option.value}>{option.name}</div>
        )}
      </div>
    );
  },

});
