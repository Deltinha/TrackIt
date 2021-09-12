import axios from "axios";

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

export function postSignUp(body){
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
}

export function postLogIn(body){
    const promise = axios.post(`${BASE_URL}/auth/login`,body);
    return promise;
}

export function postHabit(body, config){
    const promise = axios.post(`${BASE_URL}/habits`, body, config);
    return promise;
}

export function getHabits(config){
    const promise = axios.get(`${BASE_URL}/habits`, config);
    return promise;
}

export function deleteHabit(habitID, config){
    const promise = axios.delete(`${BASE_URL}/habits/${habitID}`, config);
    return promise;
}