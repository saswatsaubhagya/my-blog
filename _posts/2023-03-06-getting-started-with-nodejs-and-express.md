---
title: "Getting Started with Node.js and Express: Build a REST API with MongoDB Atlas"
date: 2023-03-06
categories: [Node.js, Backend Development]
tags: [Node.js, Express, MongoDB, Mongo Atlas, API]
excerpt: "A comprehensive beginner's guide to building RESTful APIs with Node.js, Express, and MongoDB Atlas. Learn project setup, Mongo Atlas integration, and CRUD operations with detailed examples."
author: "Saswat Saubhagya"
---

## Introduction

Node.js and Express are a powerful combination for building fast, scalable server-side applications. In this guide, you'll learn how to set up a Node.js project, use Express to create a RESTful API, and connect your backend to MongoDB using Mongo Atlas, a cloud-based database service.

By the end of this tutorial, you'll have a working API with endpoints to create, read, update, and delete data in MongoDB Atlas.

---

## Prerequisites

- Basic knowledge of JavaScript
- Node.js and npm installed ([Download here](https://nodejs.org/))
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (free tier is sufficient)

---

## 1. Project Setup

1. **Create a new project folder:**
   ```bash
   mkdir node-express-api
   cd node-express-api
   ```
2. **Initialize npm:**
   ```bash
   npm init -y
   ```
3. **Install dependencies:**
   ```bash
   npm install express mongoose dotenv
   ```
   - `express`: Web framework for Node.js
   - `mongoose`: MongoDB object modeling tool
   - `dotenv`: Loads environment variables from a `.env` file

---

## 2. Setting Up MongoDB Atlas

1. **Sign up or log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).**
2. **Create a new cluster (free tier is fine).**
3. **Create a database user and password.**
4. **Get your connection string:**
   - Click "Connect" > "Connect your application" > Copy the connection string (e.g., `mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
5. **Create a `.env` file in your project root:**
   ```env
   MONGO_URI=your_mongo_connection_string_here
   ```
   Replace `your_mongo_connection_string_here` with your actual connection string.

---

## 3. Basic Express Server

Create a file named `server.js`:

```js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## 4. Define a Mongoose Model

Let's create a simple model for a "Task" (for a ToDo API):

Create a file named `models/Task.js`:

```js
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);
```

---

## 5. Create CRUD API Endpoints

Add the following to your `server.js`:

```js
const Task = require('./models/Task');

// Create a new task
app.post('/api/tasks', async (req, res) => {
  try {
    const task = new Task({ title: req.body.title });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a task
app.put('/api/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a task
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
```

---

## 6. Testing the API

You can use [Postman](https://www.postman.com/) or [curl](https://curl.se/) to test your endpoints:

- **Create Task:**
  - POST `/api/tasks` with JSON body `{ "title": "Learn Node.js" }`
- **Get Tasks:**
  - GET `/api/tasks`
- **Update Task:**
  - PUT `/api/tasks/:id` with JSON body `{ "completed": true }`
- **Delete Task:**
  - DELETE `/api/tasks/:id`

---

## 7. Folder Structure Example

```
node-express-api/
├── models/
│   └── Task.js
├── .env
├── package.json
├── server.js
```

---

## Conclusion

You now have a working RESTful API built with Node.js, Express, and MongoDB Atlas! This setup is a solid foundation for more complex applications. Explore adding authentication, validation, and more advanced features as your next steps.

---

## Resources

- [Node.js Official Docs](https://nodejs.org/en/docs/)
- [Express Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

Happy coding! 🚀