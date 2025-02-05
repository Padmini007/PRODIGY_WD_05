# PRODIGY_WD_05
weather-app

# Weather App

This is a simple weather app that fetches weather data based on the city name entered by the user. It uses the **OpenWeatherMap API** to get real-time weather information, such as temperature, weather condition, and an icon representing the current weather. 

## Features

- Enter the name of any city to get current weather information.
- Displays temperature in Celsius.
- Shows a weather description (e.g., "Clear sky", "Rainy", etc.).
- Displays an icon representing the weather condition.

---

## Requirements

- A **browser** to run the app (Google Chrome, Firefox, etc.).
- An **OpenWeatherMap API key** (free to get by registering on the [OpenWeatherMap website](https://openweathermap.org)).

---

## Setup

### 1. **Get the OpenWeatherMap API Key**

To fetch weather data, you'll need an API key from OpenWeatherMap.

1. Go to [OpenWeatherMap](https://openweathermap.org).
2. Sign up for an account.
3. After logging in, go to the **API keys** section in your profile.
4. Copy the **API key**. It will look something like: `abcdef1234567890abcdef1234567890`.

### 2. **Download the Project Files**

Create a folder on your computer and save the following files in it:

1. **`index.html`** - The main HTML file that defines the structure of the page.
2. **`style.css`** - The CSS file to style the app.
3. **`app.js`** - The JavaScript file that fetches the weather data from OpenWeatherMap.

---

## How to Run the App

### 1. **Save Your API Key**

In the `app.js` file, replace the placeholder `'your_api_key_here'` with your actual **OpenWeatherMap API key**.

```javascript
const apiKey = 'your_api_key_here';
