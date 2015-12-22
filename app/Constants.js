//import keyMirror from 'react/lib/keyMirror';

export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

   //Each time you add an action, add it here... They should be past-tense
  ActionTypes: {
    TASK_ADDED: null,
    CLEAR_LIST: null
  },

  ActionSources: {
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }
};
