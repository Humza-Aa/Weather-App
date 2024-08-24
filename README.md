# Weather App

## Overview

This project is a weather application that provides weather information and images for specified cities. It uses React.js for the frontend and Django for the backend.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [JavaScript (React.js)](https://react.dev/) (for the frontend)
- [Python (Django)](https://www.python.org/) (for the backend)
- [pip](https://pip.pypa.io/en/stable/) (Python package manager)
- [virtualenv](https://virtualenv.pypa.io/en/latest/) (for Python virtual environments)

### Clone the repository:

git clone https://github.com/your-username/weather-app.git
cd weather-app

### Frontend (React.js)

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```


3. **Run the development server:**
    ```bash
   npm run start
   The frontend will be available at http://localhost:3000.
    ```

### Backend (Django)

1. **Navigate to the backend directory:**

    ```bash
   cd ../backend
    ```

2. **Create and activate a virtual environment:**

    ```bash
   python -m venv venv
   source venv/bin/activate # On Windows, use: venv\Scripts\activate
    ```

3. **Install dependencies:**

    ```bash
   pip install -r requirements.txt
    ```

4. **Apply database migrations:**

    ```bash
   python manage.py migrate
    ``` 

5. **Run the development server:**
   ```bash
   python manage.py runserver
   The backend will be available at http://localhost:8000.
   ```


## API Endpoints

### Weather Endpoint

- **URL:** `/api/weather/`
- **Method:** `GET`
- **Query Parameters:** `city` (e.g., `?city=London`)

### Image Endpoint

- **URL:** `/api/image/`
- **Method:** `GET`
- **Query Parameters:** `description` (e.g., `?description=10d`)

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with your changes.


