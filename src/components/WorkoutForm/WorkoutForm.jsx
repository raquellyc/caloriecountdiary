
export default function WorkoutForm() {

  return (
    <div>
      <div className="workout-diary">
        <form>
          <label>Workout Name: </label>
          <input type="text" name="name"></input>
          <label>Duration: </label>
          <input type="text" name="time"></input>
          <button type="submit">ADD</button>
        </form>
      </div>
    </div>
  );
}