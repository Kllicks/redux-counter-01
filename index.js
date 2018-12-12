// #1 Write out an example/default version of my application state

const defaultState = {
    count: 0
};

// #2 - Describe the ways that state can change
// - count can go up by one
// - count can go down by one
// #2b - Find single words for short phrases for those changes
// - increment
// - decrement

// Also good to all-caps the variable for an action
const ACTION_INC = {
    type: 'INCREMENT' // common to uppercase type
};

const ACTION_DEC = {
    type: 'DECREMENT'
};

// #3 - Write a pure function that accepts the current state and an action, then returns the new version state

const counter = (state=defaultState, action) => {
    // check the action.type
    switch(action.type){
        // if (action.type === ACTION_INC.type) {}
        case ACTION_INC.type:
        // if its 'INCREMENT', return a new state object with the count + 1
            return {
                count: state.count+1
            };
            // break; // no need to break, since we're using a return
        case ACTION_DEC.type:
        // if its 'DECREMENT', return a new state object with the count - 1
            return {
                count: state.count-1
            };

        default:
        // else return the state as-is
            return state;
    }
};