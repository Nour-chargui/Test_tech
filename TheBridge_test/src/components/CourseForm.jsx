import React, { useState, useEffect } from 'react';

const CourseForm = ({ selectedCourse, onCreateOrUpdate, onDelete }) => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (selectedCourse) {
      // If a course is selected, populate the form with its details for editing
      setFormData({
        title: selectedCourse.title,
        price: selectedCourse.price,
        imageUrl: selectedCourse.imageUrl,
      });
    } else {
      // If no course is selected, reset the form
      setFormData({
        title: '',
        price: '',
        imageUrl: '',
      });
    }
  }, [selectedCourse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateOrUpdate(formData);
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{selectedCourse ? 'Edit Course' : 'Add New Course'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
            {selectedCourse ? 'Update Course' : 'Create Course'}
          </button>
          {selectedCourse && (
            <button type="button" onClick={handleDelete} className="text-red-500">
              Delete Course
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CourseForm;
