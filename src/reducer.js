// imagine your store was an array of bug objects
// [
// {id: 1, description:  "The webpage breaks whenever I type in a word", resolved: false}
//]
let lastId = 0;

// a function with two parameters:
// state, action
// the reducer's job is to return an updated state
function reducer(state = [], action){
    // in the beginning, our state is undefined
    // the action will be dispatched with undefined state
    // if that happens, we have to return an initial state - we can do
    // so using a default value for the state
    if (action.type === 'bugAdded'){
        return [
            // state is immutable! so we must return a new state
            // in this case, we copy the existing array using spread
            // and add a new element - the newly added bug!
            ...state,
            {
                id: ++lastId,
                // payload of action should hold minimal information needed
                // for example, we don't store the id and resolved in action payload,
                // because we can set these internally
                description: action.payload.description,
                resolved: false
            }
        ]
    }
    if (action.type === 'bugRemoved'){
        return state.filter(bug => bug.id !== action.payload.id)
    }
    // we don't want our system to blow up if something goes wrong.
    // we just return an unchanged state
    return state;
};