import axios from 'axios';

const API_BASE_URL = ' http://192.168.10.8:3000'; // Replace with your actual API base URL

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/users/register`, userData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error registering user');
  }
};

// Add more API functions for other endpoints as needed

export default {
  registerUser,
};
