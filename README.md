# React and Django REST Framework (DRF) Application

This is a sample React and Django REST Framework (DRF) application created for learning purposes. It's based on a tutorial from YouTube, which you can find [here](https://youtu.be/soxd_xdHR0o?si=k6i-6ZCL3DG8GEC0).

## Purpose
The main purpose of this application is to create a practical example for myself of building a full-stack web application using React for the frontend and Django REST Framework for the backend. 
It's intended for my own learning in web development and to understand how to integrate a frontend framework like React with a backend framework like Django.


## Features

- React frontend for the user interface
- Django REST Framework backend for handling API requests
- CRUD (Create, Read, Update, Delete) operations for managing data
- Authentication and authorization (in developing)

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine:

   git clone https://github.com/PlushaQ/drf-react-blog-app.git

2. Navigate to the project directory:

   cd your_repository
   

3. Install the dependencies for both the frontend and backend:

   # Install frontend dependencies
   cd drf_react_front
   npm install

   # Install backend dependencies
   cd ../drf_backend
   pip install -r requirements.txt

4. Start the development servers:

   # Start the frontend development server
   cd ../drf_react_front
   npm start

   # Start the Django development server
   cd ../drf_backend
   python manage.py runserver

5. Access the application in your web browser:

   Open [http://localhost:3000](http://localhost:3000) to view the React frontend.
   Open [http://localhost:8000](http://localhost:8000) to access the Django REST Framework backend.

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
