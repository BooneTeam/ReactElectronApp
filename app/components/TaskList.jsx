import React from 'react';
import TaskCheckInput from './TaskCheckInput.jsx';
import Task from './Task.jsx';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Alert from 'react-bootstrap/lib/Alert';

export default React.createClass({
  //getDefaultProps() {
  //  return {
  //    tasks: []
  //  };
  //},

  render() {
    let {tasks} = this.props;

    if (tasks.length === 0) {
      return (
        <Alert bsStyle="warning">
          <strong>You have no tasks</strong> Create some using the Add New button below.
        </Alert>
      );
    }

    return (
      <form>
        <ListGroup>
          {tasks.map(function (task, idx) {
            <Task key={task.title} task={task} key={idx}/>
          })}
        </ListGroup>
      </form>
    );
  }
});
