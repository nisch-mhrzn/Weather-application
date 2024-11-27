# Weather App

## Overview

This Weather App is a web-based application designed to provide real-time weather information for different cities. Users can search for a specific city to view its current weather metrics, including temperature, humidity, wind speed, and more. The app integrates with the Weather API from RapidAPI to fetch up-to-date weather data and displays it in a user-friendly interface.

## Features

- **Search Functionality**: Users can search for weather information by city.
- **Weather Metrics**: Displays current temperature, feels-like temperature, minimum and maximum temperatures, humidity, wind speed, sunrise, and sunset times.
- **Pre-Selected Cities**: Quick access to weather information for cities like Delhi, Seattle, and Bangalore.
- **Responsive Design**: Built with Bootstrap for a clean, responsive user interface.

## Technologies Used

- HTML
- CSS (Bootstrap)
- JavaScript
- Weather API from RapidAPI

## Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- Internet connection

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/nisch-mhrzn/Weather-application.git
   ```
2. Navigate to the project directory:
   ```sh
   cd weather-app
   ```
3. Open the `index.html` file in your preferred web browser.

### Configuration

1. Obtain an API key from RapidAPI for the Weather API.
2. Open the `script.js` file.
3. Replace `'YOUR_API_KEY'` with your actual RapidAPI key in the headers section:
   ```javascript
   headers: {
       'X-RapidAPI-Key': 'YOUR_API_KEY',
       'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
   }
   ```

## Usage

1. **Search Weather by City**: Enter the name of the city in the search bar and click on the "Search" button. The application will fetch and display the weather data for the specified city.
2. **Quick Access Cities**: Click on any city name from the dropdown menu to quickly view its weather information.
3. **Weather Information**: The main page displays key weather metrics including temperature, feels-like temperature, humidity, wind speed, sunrise, and sunset times for the specified city.

## Code Explanation

### HTML

- The HTML file includes a navigation bar, main weather display section, and a table for weather data of other common places.
- Bootstrap is used for styling and responsiveness.

### JavaScript

- The `getWeather` function fetches weather data for a given city using the Weather API.
- Event listeners handle the search functionality and fetch weather data based on user input.

### API Integration

- The app integrates with the Weather API from RapidAPI to fetch real-time weather data.
- The API response is processed and displayed on the webpage dynamically.

## File Structure

- `index.html`: Main HTML file containing the structure of the web application.
- `script.js`: JavaScript file containing the logic for fetching and displaying weather data.
- `README.md`: Documentation file for the project.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or issues, please contact nischal.maharjan1233@gmail.com.

---

Enjoy using the Weather App and stay updated with the latest weather information!
