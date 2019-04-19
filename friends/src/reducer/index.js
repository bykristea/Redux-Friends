import {FETCH_FRIENDS_START, 
    FETCH_FRIENDS_SUCCESS, 
    FETCH_FRIENDS_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FETCHING,
    LOGIN_FAILURE, 
    ADD_FRIENDS_START,
    ADD_FRIENDS_SUCCESS,
    ADD_FRIENDS_FAILURE
} from '../actions/index.js';

const initialstate ={
    
        // deletingFriend: false,
        fetchingFriends: false,
        
        friend: [],
        loggingIn: false,
        isFetching:false,
        error: null
      
};

export const friendReducer = (state = initialstate, action) =>{
    
    switch (action.type){
        case FETCH_FRIENDS_START:
        return{
          ...state,
          err: '',
          fetchingFriends: true
        }
        case FETCH_FRIENDS_SUCCESS:
        return{
          ...state,
          err: '',
          isFetching: false,
          friend: action.payload
        }
         case LOGIN_FETCHING:
         return{
             ...state,
             loggingIn: false,
             isFetching: true,
         }
         case LOGIN_SUCCESS:
         return{
             ...state,
             loggingIn: true,
             isFetching: false,
         }
         case LOGIN_FAILURE:
         return{
             ...state,
             loggingIn:false,
             isFetching: false,
             err: 'ooops'
         }
        case FETCH_FRIENDS_FAILURE:
        default:
          return state;

          case ADD_FRIENDS_START:
          return{
            ...state,
            err: '',
            fetchingFriends: true
          };
          case ADD_FRIENDS_SUCCESS:
          return {
            ...state,
            isFetching: false,
            friend: action.payload
          };
        case ADD_FRIENDS_FAILURE:
          return {
            ...state,
            isFetching: false,
            error: action.payload
          };

          
    }




}