import "./AddNewActivity.css";

export default function Form({ onAddActivity }) {
  return (
    <div className="form-container">
      <h2 id="form-title">Add new Activity</h2>
      <form
        className="activity-form"
        aria-labelledby="form-title"
        onSubmit={onAddActivity}
      >
        <label htmlFor="name">Enter new Activity:</label>
        <input type="text" id="name" name="name"></input>
        <label htmlFor="isGood">Good Weather Activity?</label>
        <input type="checkbox" id="isGood" name="isGood"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
