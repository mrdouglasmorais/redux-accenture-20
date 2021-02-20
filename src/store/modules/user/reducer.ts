import { Reducer } from 'redux'
import { IState } from  './types';

const INITIAL_STATE: IState = {
    users: []
}

const allUsers: Reducer<IState | any> = ( state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ADD_USER': {
            console.log(action.payload)
            const { user } = action.payload;

            return {
                ...state,
                users: [
                    ...state.users,
                    user
                ]
            }


        }
        default: {
            return state
        }

    }
}
export default allUsers;