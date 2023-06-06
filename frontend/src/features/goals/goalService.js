import axios from 'axios';

const API_URL = '/api/goals/';

const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.post(API_URL, goalData, config);

  return res.data;
};

const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(API_URL, config);

  return res.data;
};

const goalService = {
  createGoal,
  getGoals,
};

export default goalService;