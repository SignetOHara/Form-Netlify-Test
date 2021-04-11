import React from "react";

import Courses from "./Courses";
import Dance from "./Dance";
import Music from "./Music";
import DanceAndMusic from "./DanceAndMusic";
import LastPage from "./LastPage";
import Success from "./Success";

const Button = ({ click }) => {
  // const { formStep, setFormStep } = click;
  
  // const navigationHandler = course => {
  //   if (course === "dance") {
  //     navigation.go("dance");
  //   } else if (course === "music") {
  //     navigation.go("music");
  //   } else if (course === 'danceAndMusic') {
  //     navigation.go("danceAndMusic");
  //   }
  // };

  const navigate = (formStep) => {
    console.log(formStep);
    switch (click.formStep) {
      case 1:
        return <Courses />;
      case "courses":
        return <Courses />;
      case "dance":
        return <Dance />;
      case "music":
        return <Music />;
      case "danceAndMusic":
        return <DanceAndMusic />;
      case "send":
        return <LastPage />;
      case "success":
        return <Success />;
      default:
        break;
    }
    click.setFormStep(formStep => formStep + 1);
  };

  return (
    <button type="button" onClick={() => navigate(1)}>
      Next
    </button>
  );
};

export default Button;
