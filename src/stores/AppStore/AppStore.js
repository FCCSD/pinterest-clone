import { EventEmitter } from 'events';
import dispatcher from './../../dispatcher.js';

class AppStore extends EventEmitter {
  constructor() {
    super();
    this.data = [{
      id: 1,
      user: 'Orlando',
      imgUrl: 'http://fillmurray.com/200/300',
      imgTitle: 'Business Bill Murray',
      likes: 1,
      liked: false
    }, {
      id: 2,
      user: 'Orlando',
      imgUrl: 'http://fillmurray.com/450/450',
      imgTitle: 'Surprised Bill Murray',
      likes: 1,
      liked: false
    }, {
      id: 3,
      user: 'Orlando',
      imgUrl: 'http://fillmurray.com/500/500',
      imgTitle: 'Concerned Bill Murray',
      likes: 1,
      liked: false
    }, {
      id: 4,
      user: 'Orlando',
      imgUrl: 'http://fillmurray.com/325/325',
      imgTitle: 'Flowery Bill Murray',
      likes: 1,
      liked: false
    }, {
      id: 5,
      user: 'Orlando',
      imgUrl: 'http://fillmurray.com/200/300',
      imgTitle: 'Business Bill Murray',
      likes: 1,
      liked: false
    }, {
      id: 6,
      user: 'Orlando',
      imgUrl: 'http://fillmurray.com/450/450',
      imgTitle: 'Surprised Bill Murray',
      likes: 1,
      liked: false
    }, {
      id: 7,
      user: 'Orlando',
      imgUrl: 'http://fillmurray.com/500/500',
      imgTitle: 'Concerned Bill Murray',
      likes: 1,
      liked: false
    }, {
      id: 8,
      user: 'Orlando',
      imgUrl: 'http://fillmurray.com/325/325',
      imgTitle: 'Flowery Bill Murray',
      likes: 1,
      liked: false
    }]

  }

  returnData() {
    return this.data;
  }

  addLike(id) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id == id) {
        if (!this.data[i].liked) {
          this.data[i].likes += 1;
          this.data[i].liked = true;
        }
        else {
          this.data[i].likes -= 1;
          this.data[i].liked = false;
        }
      }
    }

    this.emit('change');
  }

  addTile(tile) {
    this.data.push(tile);
  }

  handleActions(action) {
    switch (action.type) {
      case "ADD_TILE": {
        this.addTile(action.tile);
        break;
      }
      case "ADD_LIKE": {
        this.addLike(action.id);
        break;
      }
    }
  }
}

// eslint-disable-next-line
const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));

export default appStore;
