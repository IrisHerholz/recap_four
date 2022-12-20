import "./App.css";
import { useState } from "react";
import Form from "./Components/Form.js";
import { uid } from "uid";
import List from "./Components/List";

function App() {
  const [activities, setActivities] = useState([]);
  const [weather, setWeather] = useState(true);
  const goodActivities = activities.filter((activity) => activity.isGood);
  const badActivities = activities.filter((activity) => !activity.isGood);

  console.log(activities);

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
    //event.target.reset()
    //event.target.data.name.focus()
  }

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
      <List activities={weather ? goodActivities : badActivities} />
    </div>
  );
}

export default App;
