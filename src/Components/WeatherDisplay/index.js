import "./WeatherDisplay.css";

export default function WeatherDisplay({ condition, location, temperature }) {
  return (
    <header>
      <span>{condition}</span>
      <p>Location: {location}</p>
      <p>Temperature: {temperature}°C</p>
    </header>
  );
}
