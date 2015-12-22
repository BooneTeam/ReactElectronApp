import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

export default {
  addItem(text) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_ADDED,
      text: text
    });
  },

  clearList() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.CLEAR_LIST
    });
  },

  completeTask(task) {
    console.warn('completeTask action not yet implemented...');
  }
};
