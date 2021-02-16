import axios, { Method } from 'axios';


type RequestParams = {
    method?: Method;
    url: string;
    data?: object;
    params?: object;
}

const URL_BASE = 'https://api.github.com/users';

export const makeResquest = ({ method='GET', url, data, params }:RequestParams) => {
    return axios({
        method,
        url: `${URL_BASE}${url}`,
        data,
        params
    });
}