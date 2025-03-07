# 🏋️ FitGif API

A production-ready backend API for serving exercise content, including GIF of each exercise and their instructions.

## 🚀 Project Overview

This API demonstrates backend development skills, showcasing the integration of **Express.js**, **PostgreSQL** with **Sequelize ORM**, and **Minio** object storage.
It's designed to provide exercise content, including names, associated GIF url, equipment, primary muscles, secondary muscles, difficulty and Instructions. The project
utlizies **Docker** for containerization and **git-crypt** for secure file encryption.

**Note**: While this API is running in a production environment, it's primarily a portfolio project and not intended for public use. Access is restricted due to CORS settings.

## 🛠️ Tech Stack

- **Backend Frameworks**: Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Object Storage**: Minio(for GIF storage)
- **Containerization**: Docker
- **Secret Management**: git-crypt

## ✨ Features

- Custom Minio integration for efficient GIF storage and retrieval
- RESTful API design
- Data persistence with PostgreSQL, managed through Sequelize ORM
- Dockerized application for easy deployment and scalability
- Secure file encryption using git-crypt for sensitive configuration

## 📊 API Endpoint

Currently, there is one route available:

- `GET /api/bodyweight `: Retrieves a list of body weight exercises with their GIF url

## Data Structure

Each exercise entry includes:

- Exercise name
- GIF url (for visual demonstration)
- Equipment used
- Primary muscles
- Secondary muscles
- difficulty

## 🚫 Usage Restrictions

- This API is running in a production environment but is not for public use
- Frontend access is restricted due to CORS origin rules
- Intended for portfolio demonstration purposes

## 📚 Learning Points

- Integrating Minio object storage with Express.js
- Implementing Sequelize ORM with PostgreSQL
- Designing RESTful API
- Containerizing applications with Docker
- Securing sesitive files with git-crypt
- Handling CORS for API security
- Implementing rate limiting

## 🔮 Future Enhancements

- Implement user authentication
- Add more exercise-related endpoints
- Enhance error handling and logging

## 📞 Contact

API Link: https://bwapi.lifeinloop.in/api/bodyweight
