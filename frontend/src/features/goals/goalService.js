import axios from 'axios';

const API_URL = '/api/goals/';

const createGoal = (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = axios.post(API_URL, goalData, config);

  return res.data;
};

const goalService = {
  createGoal,
};

export default goalService;
