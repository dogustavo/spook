import Http from '~/utils/http';

/**
 * signIn
 *
 * @param credentials
 * @returns {function(*)}
 */

export const requestSigin = async (credentials) => {
    
    try {
        
        const res = await Http.post('/user/auth', credentials);

        if(res.data.success) {
            return res.data.data;;
        }

        throw res;

    } catch (error) {
        const errorMessage = error.data ? error.data.message : error;
        throw errorMessage;
    }
}

export const requestSigup = async (form) => {
    try {
        const res = await Http.post('/user/create', form);

        if(res.data.success) {
            return res.data.success;
        }

        throw res;
    } catch (error) {
        const errorMessage = error.data ? error.data.message : error;
        throw errorMessage;
    }
}