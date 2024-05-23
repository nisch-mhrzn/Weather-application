Weather App
Overview
This Weather App is a web-based application that allows users to check the current weather information for different cities. It displays key weather metrics such as temperature, humidity, wind speed, and more. The application uses the Weather API from RapidAPI to fetch real-time weather data.

Features
Search for weather information by city.
Displays current temperature, feels-like temperature, minimum and maximum temperatures, humidity, wind speed, sunrise and sunset times.
Quick access to weather information for pre-selected cities like Delhi, Seattle, and Bangalore.
Responsive design using Bootstrap for a clean and user-friendly interface.
Technologies Used
HTML
CSS (Bootstrap)
JavaScript
Weather API from RapidAPI
Setup Instructions
Prerequisites
A web browser (Chrome, Firefox, Edge, etc.)
Internet connection
Installation
Clone the repository or download the ZIP file.
Extract the files to your desired location.
Running the Application
Open the index.html file in your preferred web browser.
Configuration
The application uses an API key from RapidAPI. Ensure that your key is included in the script.js file under the headers section.
javascript
Copy code
headers: {
    'X-RapidAPI-Key': 'YOUR_API_KEY',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
}
Replace YOUR_API_KEY with your actual RapidAPI key.

Usage
Search Weather by City: Enter the name of the city in the search bar and click on the "Search" button. The application will fetch and display the weather data for the specified city.
Quick Access Cities: Click on any city name from the dropdown menu to quickly view its weather information.
Weather Information: The main page displays the current weather metrics including temperature, feels-like temperature, humidity, wind speed, sunrise and sunset times for the specified city.
Code Explanation
HTML
The HTML structure includes a navigation bar, main weather display section, and a table for weather data of other common places.
Bootstrap is used for styling and responsiveness.
JavaScript
The getWeather function fetches weather data for a given city using the Weather API.
Event listeners are added to handle the search functionality and fetch weather data based on user input.
API Integration
The application integrates with the Weather API from RapidAPI to fetch real-time weather data.
The API response is processed and displayed on the webpage dynamically.
File Structure
index.html: The main HTML file that contains the structure of the web application.
style.css: Optional CSS file for custom styling (if needed).
script.js: JavaScript file that contains the logic for fetching and displaying weather data.
README.md: Documentation file for the project.
License
This project is licensed under the MIT License.

Contact
For any inquiries or issues, please contact [your-email@example.com].

Enjoy using the Weather App and stay updated with the latest weather information!
