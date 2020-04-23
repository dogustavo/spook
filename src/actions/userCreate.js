import { Types } from '../constants/index';

export const createUser = {
    create: payload => ({
        type: Types.SIGNIN,
        payload: payload
    }) 
}

export { createUser }