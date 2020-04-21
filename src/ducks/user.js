/**
 *
 * Actions Types
 *
 */

export const Types = {
    SET_USER: 'user/SET_USER'
};

/**
 *
 * Reducers
 *
 */

const initialState = {
    user: null,
};


export default function reducer(state = initialState, action) {

    const { 
        type, 
        payload 
    } = action
    
    switch (type) {
        case Types.SET_USER:
            return { 
                ...state, 
                isLoading: false, 
                user: payload 
            }
        default:
            return state
    }
}

/**
 *
 * Actions Creators
 *
 */

export const setUser = user => ({ type: Types.SET_USER, payload: user });