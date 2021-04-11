import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import First from "./stepForm/First";
import Courses from "./stepForm/Courses";
import Dance from "./stepForm/Dance";
import Music from "./stepForm/Music";
import DanceMusic from "./stepForm/DanceMusic";
import Send from "./stepForm/Send";
import Success from "./stepForm/Success";

const defaultData = {
  name: "",
  email: "",
  enrolleeName: "",
  enrolleeAge: null,
  number: null,
  course: "",
  ballet: false,
  jazz: false,
  hiphop: false,
  voice: false,
  piano: false,
  guitar: false,
  violin: false,
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
  awareness: "",
};

const steps = [
  { id: "first" },
  { id: "courses" },
  { id: "dance" },
  { id: "music" },
  { id: "danceAndMusic" },
  { id: "send" },
  { id: "success" },
];

const HelperForm = () => {
  const [formData, setFormData] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setFormData, navigation };

  console.log(formData);

  switch (step.id) {
    case "first":
      return <First {...props} />;
    case "courses":
      return <Courses {...props} />;
    case "dance":
      return <Dance {...props} />;
    case "music":
      return <Music {...props} />;
    case "danceAndMusic":
      return <DanceMusic {...props} />;
    case "send":
      return <Send {...props} />;
    case "success":
      return <Success {...props} />;
    default:
      break;
  }

  return (
    <div>
      <h1>React Hooks Helper</h1>
    </div>
  );
};

export default HelperForm;
