/**
 *
 * Actions Types
 *
 */

export const Types = {
    SET_USER: 'user/SET_USER',
    SET_LIKE: 'user/SET_LIKE',
    SET_DISLIKE: 'user/SET_DISLIKE'
};

/**
 *
 * Reducers
 *
 */

const initialState = {
    user: null,
    like: [],
    dislike: []
    
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
                like: null,
                dislike: null, 
                user: payload 
            }
        case Types.SET_LIKE:
            return { 
                ...state, 
                isLoading: true,
                like: [...state.data, action.book], 
                dislike: null,
                user: payload 
            }
        case Types.SET_LIKE:
            return { 
                ...state, 
                isLoading: false,
                like: null, 
                dislike: [...state.data, action.book], 
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
export const setLike = like => ({ type: Types.SET_LIKE, payload: like });
export const setDislike = dislike => ({ type: Types.SET_USER, payload: dislike });