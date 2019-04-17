import { LOADING } from '../actions';

const initialState = {
    friends: [ {
        id: 1,
        name: "Casper",
        age: 98,
        email: "casper@theghost.com"

    }],
    loading: false,
    error: ''
};

export default (state = initialState, action) => {
    switch(action.type){
        case LOADING:
            return Object.assign({}, state, {loading: true})
            default:
            return state
    }
};