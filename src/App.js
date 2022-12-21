import "./App.css";
import { useEffect, useState } from "react";
import { uid } from "uid";
import Form from "./Components/AddNewActivity";
import List from "./Components/ActivityList";
import WeatherDisplay from "./Components/WeatherDisplay";

function App() {
  // initial activities
  const [activities, setActivities] = useState([
    { name: "go in the park", isGood: true, id: uid() },
    { name: "clean kitchen", isGood: false, id: uid() },
  ]);
  // store fetched data
  const [weather, setWeather] = useState();
  const [condition, setCondition] = useState();
  const [location, setLocation] = useState();
  const [temperature, setTemperature] = useState();
  // filter array of entries
  const goodActivities = activities.filter((activity) => activity.isGood);
  const badActivities = activities.filter((activity) => !activity.isGood);

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeather(data.isGoodWeather);
      setCondition(data.condition);
      setLocation(data.location);
      setTemperature(data.temperature);
    }
    fetchWeather();
  }, []);

  function handleAddActivity(event) {
    event.preventDefault();
    console.log(event.target.elements.isGood.checked);
    setActivities([
      ...activities,
      {
        name: event.target.elements.name.value,
        isGood: event.target.elements.isGood.checked,
        id: uid(),
      },
    ]);
    event.target.reset();
    event.target.data.name.focus();
  }

  return (
    <div className="App">
      <WeatherDisplay
        condition={condition}
        location={location}
        temperature={temperature}
      />
      <Form onAddActivity={handleAddActivity} />
      <List activities={weather ? goodActivities : badActivities} />
    </div>
  );
}

export default App;
