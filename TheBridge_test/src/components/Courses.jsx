import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.jsx';

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    console.log(courses);
  }, [courses]);

  return (
    <div className="lg:px-48 px-10 flex flex-col gap-10">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-4xl font-bold">Discover Our Courses</h1>
        <button className="bg-pink-700 px-6 py-2 rounded-2xl text-white font-semibold">View More</button>
      </div>
      <div className="grid md:grid-cols-3 md:grid-rows-none grid-rows-3 gap-10 place-items-center">
        {courses.map((course) => (
          <Card
            key={course._id} // Add a unique key for each course
            title={course.title}
            image={course.imageUrl}
            price={course.price}
          />
        ))}
      </div>
    </div>
  ); 
  const Courses = () => {
    const handleBulkUpload = async () => {
      try {
        const response = await axios.post('http://localhost:3001/api/courses/bulk-upload');
        console.log('Bulk Upload Response:', response.data);
        // Handle success, e.g., refresh the course list
      } catch (error) {
        console.error('Error during bulk upload:', error);
        // Handle error, e.g., show an error message
      }
    };
  
    return (
      <div>
        {/* Your existing course list rendering logic */}
  
        <button onClick={handleBulkUpload}>Bulk Upload Courses</button>
      </div>
    );
  };
  
  export default Courses;
  
}
