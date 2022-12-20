import "./App.css";
import { useState } from "react";
import Form from "./Components/Form.js";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);
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
    </div>
  );
}

export default App;
