import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=olnMlV%2F63GO98MbrKD%2B89c3f%2FBoLrDU82mHZuM0qbDDOOujnj1dnPfBT0IFGtR08U1KdVSPlMYa0kc8LLxQuuQ%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20240407&base_time=0030&nx=55&ny=127',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
