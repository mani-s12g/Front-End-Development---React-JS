function Profile ({data, setData, errors}) {
    const {name, age, email} = data; // data destructuring here

    const handleDataChange = (e, item) => {
        setData((prevState) => ({
            ...prevState, // taking previous state and updating that
            // name: e.target.value, // hard coded
            [item]: e.target.value, // dynamically taking inputs
        }));
    }

    return (
    <div>
        <div>
            <label>Name:</label>
            {/* <input type="text" value={name} onChange={handleDataChange} /> */}
            <input type="text" value={name} onChange={(e) => handleDataChange(e, "name")} />
            {errors.name && <span className="errors">{errors.name}</span>}
        </div>
        <div>
            <label>Age:</label>
            <input type="number" value={age} onChange={(e) => handleDataChange(e, "age")} />
            {errors.age && <span className="errors">{errors.age}</span>}
        </div>
        <div>
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => handleDataChange(e, "email")} />
            {errors.email && <span className="errors">{errors.email}</span>}
        </div>
    </div>
)
}
export default Profile;