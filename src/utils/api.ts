import axios from 'axios';
import ILoginForm from '../common/interface/ILoginForm';

const baseUrl = 'http://localhost:8080/api/v1';

export const login = ({ username, password }: ILoginForm) =>
  axios({
    method: 'post',
    url: `${baseUrl}/login`,
    data: {
      username,
      password,
    },
  });