const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const Course = require('../models/Course');

const courseController = {
  createCourse: async (req, res) => {
    try {
      const newCourse = new Course(req.body);
      const savedCourse = await newCourse.save();
      res.json(savedCourse);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllCourses: async (req, res) => {
    try {
      const courses = await Course.find();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateCourse: async (req, res) => {
    try {
      const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedCourse);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteCourse: async (req, res) => {
    try {
      const deletedCourse = await Course.findByIdAndDelete(req.params.id);
      res.json(deletedCourse);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  bulkUpload: async (req, res) => {
    try {
      const courses = req.body; // Assuming the courses are sent in the request body
      const insertedCourses = await Course.insertMany(courses);
      res.json(insertedCourses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

router.post('/bulk-upload', async (req, res) => {
  try {
    // Read courses from courses.json file
    const coursesData = await fs.readFile('courses.json', 'utf-8');
    const courses = JSON.parse(coursesData);

    // Insert courses into the database
    const insertedCourses = await Course.insertMany(courses);

    res.json({ success: true, courses: insertedCourses });
  } catch (error) {
    console.error('Error uploading courses:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = router;
};
module.exports = courseController;