import axios from 'axios';
 
export const  FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const  FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const  LOGIN_FETCHING ='LOGIN_FETCHING';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const ADD_FRIENDS_START = 'ADD_FRIENDS_START';
export const ADD_FRIENDS_SUCCESS = 'ADD_FRIENDS_SUCCESS';
export const ADD_FRIENDS_FAILURE = 'ADD_FRIENDS_FAILURE';


export const loginSuccess = (index) => dispatch =>{
    dispatch({type: LOGIN_FETCHING})

    return axios.post(
        `http://localhost:5000/api/login`, index
    )
    .then(res =>{
         console.log(res
            )
     localStorage.setItem('token', res.data.payload)
        dispatch({
            type:LOGIN_SUCCESS,
            payload: res.data.payload, 
            
        })
    })
    .catch(err =>{
        dispatch({
            type: LOGIN_FAILURE,
            payload: err

        })
    })
    
    
   
}


export const getfriend = () => dispatch => {
    dispatch({type: FETCH_FRIENDS_START})

    axios.get(
        `http://localhost:5000/api/friends`,
        {headers: {authorization:localStorage.getItem('token')}}
    )
    .then(res =>{
        console.log(res)
        dispatch({
            type: FETCH_FRIENDS_SUCCESS,
            payload: res.data
        })
    }
    )
    .catch(err =>{
     
        dispatch ({
            type: FETCH_FRIENDS_FAILURE,
            payload: err
        })
    })
    
}

export const addFriend = item => dispatch => {
    dispatch({ type: ADD_FRIENDS_START });
    axios
      .post('http://localhost:5000/api/friends', item)
      .then(response => {
        console.log(response);
        dispatch({
          type: ADD_FRIENDS_SUCCESS,
          payload: response.data
        });
      })
      .catch(err => dispatch({ type: ADD_FRIENDS_FAILURE, payload: "Please try again" }));
  };