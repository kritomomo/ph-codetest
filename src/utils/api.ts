import axios from 'axios';
import ILoginForm from '../common/interface/ILoginForm';

const baseUrl = process.env.REACT_APP_API;

export const login = ({ username, password }: ILoginForm) =>
  axios({
    method: 'post',
    url: `${baseUrl}/login`,
    data: {
      username,
      password,
    },
  });