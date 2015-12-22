import React from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';
import Semantic from 'semantic-ui/dist/semantic.min.js'

var ListItemWrapper = React.createClass({
  render: function() {
    return <option value={this.props.data.name}>{this.props.data.name}</option>
  }
});

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
    $('.tag.example .ui.dropdown').dropdown('setup select');

    $('.ui.dropdown').dropdown('refresh');

    $('.tag.example .ui.dropdown')
      .dropdown({
        allowAdditions: true
      })

  },


  render() {
    return (
      <div className="tag example" style={{marginTop:'1em',marginBottom:'1em'}}>
        <select className="ui fluid multiple search dropdown" multiple="true" >
          <option value="">{this.props.title}</option>
          {this.props.options.map(option =>
            <ListItemWrapper key={option.name} data={option}/>
          )}
        </select>
      </div>
    );
  },

});
