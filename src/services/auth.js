import Http from '~/utils/http';

/**
 * signIn
 *
 * @param credentials
 * @returns {function(*)}
 */

export const requestSigin = async (credentials) => {
    
    try {
        
        const response = await Http.post('/auth', credentials);

        if(response.data.success) {
            
            const { token } = response.data.data;

            return token;
        }

        throw response;

    } catch (error) {
        throw error;
    }
}

export const setAuthCookie = token => {
    setCookie('token', token);
}