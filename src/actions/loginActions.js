import dispatcher from './../dispatcher.js';

 export function sendLogin(username, password) {
   dispatcher.dispatch({
     type: "SEND_LOGIN",
     username: username,
     password: password
   });
 }
