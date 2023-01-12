

// Changing Content on Dashboard



const initState = []

const firstReducer = (state = initState , action) => {

    if( action.type === 'START' ){
        return [...state];
    }

    if(action.type === 'ADD_DATA_FROM_FIRESTORE'){
        return [...state , action.payload];
    }

    

}

// ON Login or Logout page



export default firstReducer;