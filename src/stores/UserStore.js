import { EventEmitter } from 'events';
import dispatcher from './../dispatcher.js';

class LoginStore extends EventEmitter {
  constructor() {
    super();
    this.user = {
      username: 'oelias27',
      loggedIn: true,
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

const loginStore = new LoginStore;
dispatcher.register(loginStore.handleActions.bind(loginStore));

export default loginStore;
