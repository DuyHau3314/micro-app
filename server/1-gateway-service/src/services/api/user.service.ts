import axios, { AxiosResponse } from 'axios';
import { AxiosService } from '@gateway/services/axios';
import { config } from '@gateway/config';
import { IUserDocument } from '@gateway/interfaces/user-interface';

export let axiosUserInstance: ReturnType<typeof axios.create>;

class UserService {
  constructor() {
    const axiosService: AxiosService = new AxiosService(`${config.USERS_BASE_URL}/api/v1/user`, 'user');
    axiosUserInstance = axiosService.axios;
  }

  async getRandomUsers(size: string): Promise<AxiosResponse> {
    const response: AxiosResponse = await axiosUserInstance.get(`/random/${size}`);
    return response;
  }

  async createUser(body: IUserDocument): Promise<AxiosResponse> {
    const response: AxiosResponse = await axiosUserInstance.post('/create', body);
    return response;
  }

  async seed(count: string): Promise<AxiosResponse> {
    const response: AxiosResponse = await axiosUserInstance.put(`/seed/${count}`);
    return response;
  }
}

export const userService: UserService = new UserService();
