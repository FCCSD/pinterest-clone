import dispatcher from './../dispatcher.js';

 export function addTile(tile) {
   dispatcher.dispatch({
     type: "ADD_TILE",
     tile: tile
   });
 }

 export function addLike(id) {
   dispatcher.dispatch({
     type: "ADD_LIKE",
     id: id
   });
 }
