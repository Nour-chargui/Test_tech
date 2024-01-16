const express = require('express');
const cors=require('cors');
const mongoose = require('mongoose');
const courseRoutes = require('./routes/courses');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://nourchargui:IYpvVjOiuzEOLJIt@nawarra.sirprb6.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/courses', courseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
