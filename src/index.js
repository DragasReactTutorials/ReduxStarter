import store from './store';

console.log(store);
// the store has some methods
// dispatch - for dispatching an action
// subscribe - we can subscribe to be notified of state changes
//            - the UI plays with this
// getState - gets the current state of the store
//            - to change the store we must dispatch an action

// in a real application, we might dispatch an action when the
// user clicks a button
store.dispatch(
    {
        type: 'bugAdded',
        payload: {
            description: "My first bug"
        }
 
   }
)
console.log(store.getState())
store.dispatch(
    {
        type: 'bugRemoved',
        payload: {
            id: 1
        }
    }
)
