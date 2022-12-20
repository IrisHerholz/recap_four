export default function Form({ onAddActivity }) {
  return (
    <form onSubmit={onAddActivity}>
      <h2>Add new Activity</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name"></input>
      <label htmlFor="isGood">Good Weather Activity!</label>
      <input type="checkbox" id="isGood" name="isGood"></input>
      <button type="submit">submit</button>
    </form>
  );
}
