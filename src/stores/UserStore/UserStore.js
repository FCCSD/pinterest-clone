import { EventEmitter } from 'events';
import dispatcher from './../../dispatcher.js';

class UserStore extends EventEmitter {
  constructor() {
    super();
    this.user = {
      username: 'Orlando',
      loggedIn: true ,
      userError: ''
    }
  }

  getUser() {
    return this.user;
  };

  sendLogin(username, password) {
    // Login AJAX call here
  }


  handleActions(action) {
    switch(action.type) {
      case "SEND_LOGIN": {
        this.sendLogin(action.username, action.password);
        break;
      }
    }
  }

}

const userStore = new UserStore;
dispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;
