import axios from 'axios';
import {SignInResponse} from "../auth/model/SignInResponse";
import { httpClient } from "./useHttpclient";


export const useAuthApi = () => ({
  signin: async (email: string, password: string): Promise<SignInResponse> => {
    // return {
    //   user: ''
    //   accessToken: '123456789'
    // };
    const response = await httpClient.post('/login', { email, password });
    return response.data;
  },
});
