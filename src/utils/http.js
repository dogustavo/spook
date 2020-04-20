import axios from 'axios';

import config from '../config/index';

const API_URL = `${config.apiGateway.URL}`;

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Accept = 'application/json';


export const setHeaderToke = (token) => {

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

}

export default axios;