import axios from 'axios';
import {SignInResponse} from "../auth/model/SignInResponse";
import { httpClient } from "./useHttpclient";


export const useAuthApi = () => ({
  signin: async (email: string, password: string): Promise<SignInResponse> => {
    const response = await
      httpClient.post('/auth/login', { email, password }).catch(e => console.log(e));
    return response?.data;
  },
});
