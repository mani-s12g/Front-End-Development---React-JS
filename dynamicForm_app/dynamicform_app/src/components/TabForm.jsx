import { useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

const TabForm = () => {
  const [errors, setErrors] = useState({
    // name: "Not valid input",
  });
  // Configs driven approach (Dynamically adding all the UI compponent and Fields in components)
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Not a valid name";
        }
        if (!data.age || data.age < 18) {
          err.age = "Not a valid age";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "Not a valid email";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Select any one interests";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Mani",
    age: 27,
    email: "mani@gmail.com",
    interests: ["coding", "music"],
    theme: "dark",
  });
  const DynamicFormComponent = tabs[activeTab].component;

  const handlerNext = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handlerPrev = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };
  const handlerSubmit = () => {
    console.log(data);
  };
  

  return (
    <div>
      {/* Tabs */}
      <div className="tabdiv">
        {tabs.map((item, index) => {
          return (
            <div key={index} className="tabs">
              <span onClick={() => tabs[activeTab].validate() && setActiveTab(index)}>{item.name}</span>
            </div>
          );
        })}
      </div>

      {/* tab view container */}
      <div className="tabview">
        <DynamicFormComponent
          data={data}
          setData={setData}
          errors={errors}
          setErrors={setErrors}
        />
      </div>

      <div className="navigationBtns">
        <div>
          {activeTab > 0 && activeTab < tabs.length && (
            <button onClick={handlerPrev}>prev</button>
          )}
        </div>
        <div style={{ marginLeft: "2px" }}>
          {activeTab >= 0 && activeTab < tabs.length - 1 && (
            <button onClick={handlerNext}>next</button>
          )}
        </div>
      </div>
      <div>{activeTab === tabs.length - 1 && <button onClick={handlerSubmit} >Submit</button>}</div>
    </div>
  );
};
export default TabForm;
