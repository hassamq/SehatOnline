import axios from 'axios';

const API_BASE_URL = 'http://192.168.10.11:3000'; // Replace with your actual API base URL


export const URL=()=>{
  return API_BASE_URL;
}

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

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/users/login`, userData);
    return response.data;
  } catch (error) {
    throw new Error('Error logging in');
  }
};

export const bookHomeSampling = async (tests, contact) => {
  try {
    const payload = {
      tests,
      contact,
    };
    const response = await axios.post(`${API_BASE_URL}/api/home-sampling/book`, payload);
    return response.data;
  } catch (error) {
    throw new Error('Error booking home sampling');
  }
};

export const bookLabTest = async (tests, contact, schedule) => {
  try {
    const payload = {
      tests,
      contact,
      schedule,
    };
    const response = await axios.post(`${API_BASE_URL}/api/lab-test/book`, payload);
    return response.data;
  } catch (error) {
    throw new Error('Error booking lab test');
  }
};

export const bookMedicineDelivery = async (MedicineData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/medicine-delivery`, MedicineData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error booking medicine delivery');
  }
};

export const checkSymptoms = async (symptoms) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/check-symptoms`, { symptoms });
    return response.data;
  } catch (error) {
    throw new Error('Error checking symptoms');
  }
};

export const getAllDoctors = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/doctors`);
    return response.data;
  } catch (error) {
    throw new Error('Error getting all doctors');
  }
};

export const getDoctorsBySpecialty = async (specialty) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/doctors/${specialty}`);
    return response.data;
  } catch (error) {
    throw new Error('Error getting doctors by specialty');
  }
};

export default {
  URL,
  registerUser,
  loginUser,
  bookHomeSampling,
  bookLabTest,
  bookMedicineDelivery,
  checkSymptoms,
  getAllDoctors,
  getDoctorsBySpecialty,
};
