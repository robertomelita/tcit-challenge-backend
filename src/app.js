const express = require('express');
const cors = require('cors')
const morgan = require('morgan');

const app = express();

// Import routes
const postsRoutes = require('./routes/posts.route').router;

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use('/posts', postsRoutes);

exports.app = app;
