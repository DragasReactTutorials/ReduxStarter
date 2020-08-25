// Actions are js objects
// they describe what just happened, and contain associated payload
// information which might be useful to update the store
// e.g.
{
    type: 'bugAdded', // can be any serializable object,
    payload: { //payload is not necessary and is a holdover from flux,
        // but it can be nice to maintain a consistent format
        description: "The webpage breaks whenever I type in a word"
        // you can have as many attributes here as you want
    }
}

{
    type: 'bugRemoved',
    payload: {
        id: 1
    }
}