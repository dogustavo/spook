import { Types } from '../constants/index';

const user = {
    signup: task => ({
        payload: task,
        type: Types.SIGNUP
    })
}

export { user }