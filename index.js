const {createStore} = require('redux');
const uuid = require('uuid/v4');


// #1 Write out an example/default version of my application state

const defaultState = {
    counter: [
        {
            id: uuid(),
            count: 0
        }
    ]
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

// "Action Creators"
// When you need to configure an action, write a function
function incrementCounter(id) {
    return {
        ...ACTION_INC,
        id
    }
}
//example: store.dispatch(incrementcounter('abc-123-abc-123'));

function decrementCounter(id) {
    return{
        ...ACTION_DEC,
        id
    }
}
//example: store.dispatch(decrementCounter('abc-123-abc-123'));

// #3 - Write a pure function that accepts the current state and an action, then returns the new version state

const counter = (state=defaultState, action) => {
    // check the action.type
    switch(action.type){
        // if (action.type === ACTION_INC.type) {}
        case ACTION_INC.type:
        // if its 'INCREMENT', return a new state object with the count + 1
            return {
                // count: state.count+1
                // we want to return the array of counters
                // but we want to modify the one where its id === action.id
                counters: state.counters.map(oneCounter => {
                    if (oneCounter.id === action.id) {
                        // return a new version of oneCounter
                        return {
                            ...oneCounter,
                            count: oneCounter.count + 1
                        }
                    } else {
                        return oneCounter;
                    }
                })
            };
            // break; // no need to break, since we're using a return
        case ACTION_DEC.type:
        // if its 'DECREMENT', return a new state object with the count - 1
            return {
                // count: state.count-1
                counters: state.counters.map(oneCounter => {
                    if (oneCounter.id === action.id) {
                        // return a new version of oneCounter
                        return {
                            ...oneCounter,
                            count: oneCounter.count - 1
                        }
                    } else {
                        return oneCounter;
                    }
                })
            };

        default:
        // else return the state as-is
            return state;
    }
};

// #4 - Create your store that knows how to use your reducer function(counter)
const store = createStore(counter);

// You can subscribe to notifications of any changes to the state
store.subscribe(() => {
    const theState = store.getState();
    console.log(`The state is now: ${theState.counters}`);
});

module.exports = {
    store,
    incrementCounter,
    decrementCounter,
    ACTION_INC,
    ACTION_DEC
};

/*
const {
    store,
    ACTION_INC,
    ACTION_DEC
} = require('./index');
*/