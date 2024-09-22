import axios from 'axios';
import {NativeModules} from 'react-native';
import Config from 'react-native-config';
const {MyNativeModule} = NativeModules;
const axiosInstance = axios.create({
  baseURL: Config.BASE_API_URL,
  headers: {
    accept: '*/*',
    'Content-Type': 'application/json',
  },
});

const httpClient_rest = axiosInstance;
httpClient_rest.defaults.timeout = 180000;
export default httpClient_rest;
