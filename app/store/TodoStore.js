import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
let _data = [];

// add private functions to modify data
function addItem(title, completed = false) {
  _data.push({title, completed});
}

function clearList() {
  _data = [];
}

// Facebook style store creation.
const TodoStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll() {
    return {
      tasks: _data
    };
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function (payload) {
    let action = payload.action;

    switch (action.type) {
      case Constants.ActionTypes.TASK_ADDED:
        let text = action.text.trim();
        // NOTE: if this action needs to wait on another store:
        // Dispatcher.waitFor([OtherStore.dispatchToken]);
        // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
        if (text !== '') {
          addItem(text);
          TodoStore.emitChange();
        }
        break;
      case Constants.ActionTypes.CLEAR_LIST:
        clearList();
        TodoStore.emitChange();
        break;
      // add more cases for other actionTypes...
    }
  })
});

export default TodoStore;
