import "./ActivityList.css";

export default function List({ activities }) {
  return (
    <div className="list-container">
      <h2>Things you can do now:</h2>
      <ul>
        {activities.map((activity) => {
          return <li key={activity.id}>{activity.name}</li>;
        })}
      </ul>
    </div>
  );
}
