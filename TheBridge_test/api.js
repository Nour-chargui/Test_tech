// api.js
const API_BASE_URL = 'http://localhost:3001/api'; // Replace with your server URL

export const getCourses = async () => {
  const response = await fetch(`${API_BASE_URL}/courses`);
  return response.json();
};

// Add other API functions as needed
