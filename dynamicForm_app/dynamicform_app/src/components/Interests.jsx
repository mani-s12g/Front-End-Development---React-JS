function Interests({ data, setData, errors }) {
  const { interests } = data;

  const handleDataChange = (e) => {
    console.log(e);
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };
  // console.log(interests, "interests")

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleDataChange}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={handleDataChange}
          />
          music
        </label>
      </div>
      {errors.interests && <span className="errors">{errors.interests}</span>}
    </div>
  );
}

export default Interests;
