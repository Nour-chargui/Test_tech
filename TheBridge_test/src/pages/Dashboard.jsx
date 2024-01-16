import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseForm from '../components/CourseForm';

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/courses');
      console.log('Courses:', response.data);
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleCreateOrUpdateCourse = async () => {
    const newCourseData = {
      title: 'Angular',
      price: 350,
      imageUrl: 'public/SpringBoot & Angular.png',
    };

    try {
      if (selectedCourse) {
        // Update existing course
        await axios.put(`http://localhost:3001/api/courses/${selectedCourse._id}`, newCourseData);
      } else {
        // Create new course
        await axios.post('http://localhost:3001/api/courses', newCourseData);
      }
      fetchCourses(); // Refresh the course list after creating/updating
      setSelectedCourse(null); // Clear the selected course
    } catch (error) {
      console.error('Error creating/updating course:', error);
    }
  };

  const handleDeleteCourse = async () => {
    try {
      await axios.delete(`http://localhost:3001/api/courses/${selectedCourse._id}`);
      fetchCourses(); // Refresh the course list after deletion
      setSelectedCourse(null); // Clear the selected course
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div className="lg:px-48 px-10 flex flex-col gap-10">
      <h1 className="text-4xl font-bold">Course Management</h1>

      {/* Course List */}
      <div className="grid md:grid-cols-3 md:grid-rows-none grid-rows-3 gap-10 place-items-center">
        {courses.map((course) => (
          <div key={course._id} onClick={() => handleSelectCourse(course)}>
            <p>{course.title}</p>
            <img src={course.imageUrl} alt={course.title} />
          </div>
        ))}
      </div>

      {/* Course Form */}
      <CourseForm
        selectedCourse={selectedCourse}
        onCreateOrUpdate={handleCreateOrUpdateCourse}
        onDelete={handleDeleteCourse}
      />
    </div>
  );
};

export default Dashboard;
