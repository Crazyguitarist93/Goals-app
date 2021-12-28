import "./CourseInput.css";

const CourseInput = (props) => {
  return (
    <form>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" />
      </div>
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default CourseInput;
