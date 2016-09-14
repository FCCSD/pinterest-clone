import { EventEmitter } from 'events';
import dispatcher from './../dispatcher.js';

class AppStore extends EventEmitter {
  constructor() {
    super();
    this.data = [{
      user: 'oelias27',
      imgUrl: 'http://fillmurray.com/200/300',
      imgTitle: 'Business Bill Murray',
      likes: 1,
    },
    {
      user: 'oelias27',
      imgUrl: 'http://fillmurray.com/450/450',
      imgTitle: 'Surprised Bill Murray',
      likes: 1,
    },
    {
      user: 'oelias27',
      imgUrl: 'http://fillmurray.com/500/500',
      imgTitle: 'Concerned Bill Murray',
      likes: 1,
    },
    {
      user: 'oelias27',
      imgUrl: 'http://fillmurray.com/325/325',
      imgTitle: 'Flowery Bill Murray',
      likes: 1,
    },{
      user: 'oelias27',
      imgUrl: 'http://fillmurray.com/200/300',
      imgTitle: 'Business Bill Murray',
      likes: 1,
    },
    {
      user: 'oelias27',
      imgUrl: 'http://fillmurray.com/450/450',
      imgTitle: 'Surprised Bill Murray',
      likes: 1,
    },
    {
      user: 'oelias27',
      imgUrl: 'http://fillmurray.com/500/500',
      imgTitle: 'Concerned Bill Murray',
      likes: 1,
    },
    {
      user: 'oelias27',
      imgUrl: 'http://fillmurray.com/325/325',
      imgTitle: 'Flowery Bill Murray',
      likes: 1,
    }]

  }

  returnData() {
    return this.data;
  }

  handleActions(action) {
    switch(action.type) {
      // Actions handlers will go here
    }
  }

}

// eslint-disable-next-line
const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));

export default appStore;
