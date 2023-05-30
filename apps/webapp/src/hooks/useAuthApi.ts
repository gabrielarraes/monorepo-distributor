import axios from 'axios';
import {SignInResponse} from "../auth/model/SignInResponse";
import { httpClient } from "./useHttpclient";


export const useAuthApi = () => ({
  signin: async (email: string, password: string): Promise<SignInResponse> => {
    const response = await
      httpClient.post('/auth/login', { email, password }).catch(e => console.log(e));
    return response?.data;
  },

  register: async (email: string, password: string, username: string) => {
    const response = await
      httpClient
        .post('/user',
          {
            userName: username,
            email: email,
            password: password,
          })
        .catch(e => console.log(e));
    return response?.data;
  }
});
