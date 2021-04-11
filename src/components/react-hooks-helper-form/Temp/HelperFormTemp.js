import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { map } from "lodash";
import axios from "axios";

import FirstTemp from "./FirstTemp";
import CoursesTemp from "./CoursesTemp";
import DanceTemp from "./DanceTemp";
import MusicTemp from "./MusicTemp";
import DanceMusicTemp from "./DanceMusicTemp";
import SendTempTemp from "./SendTemp";
import SuccessTemp from "./SuccessTemp";

const defaultData = {
  // name: "",
  inputs: {
    name: { id: 1275594160, value: "" },
    // email: { id: "emailAddress", value: "" },
  },
  // email: "",
  // enrolleeName: "",
  // enrolleeAge: undefined,
  // number: undefined,
  // course: "",
  // ballet: false,
  // jazz: false,
  // hiphop: false,
  // voice: false,
  // piano: false,
  // guitar: false,
  // violin: false,
  // monday: false,
  // tuesday: false,
  // wednesday: false,
  // thursday: false,
  // friday: false,
  // saturday: false,
  // awareness: "",
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

const HelperFormTemp = () => {
  const [formState, setFormState] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formState, setFormState, navigation };

  // console.log(formData);

  const RenderSwitch = step => {
    switch (step.id) {
      case "first":
        return <FirstTemp {...props} />;
      case "courses":
        return <CoursesTemp {...props} />;
      case "dance":
        return <DanceTemp {...props} />;
      case "music":
        return <MusicTemp {...props} />;
      case "danceAndMusic":
        return <DanceMusicTemp {...props} />;
      case "send":
        return <SendTempTemp {...props} />;
      case "success":
        return <SuccessTemp {...props} />;
      default:
        break;
    }
  };

  const submitHandler = async e => {
    e.preventDefault();

    const { inputs } = formState;
    const formData = new FormData();

    // THIS DOESN'T WORK! ONLY LODASH IS WORKING FOR NOW
    // [inputs].map(item => {
    //   console.log(item);
    //   formData.append(`entry.${item.id}`, item.value);
    // });

    map(inputs, item => {
      formData.append(`entry.${item.id}`, item.value);
    });

    await axios({
      url: `https://docs.google.com/forms/u/1/d/e/1FAIpQLScxhTEMUyFIZXzklLmrBzAYJ8f-h4FG8bAAAQhG469vySSFVA/formResponse`,
      method: "post",
      data: formData,
      responseType: "json",
    })
      .then(response => {
        console.log("response", response);
      })
      .catch(err => {
        console.log("err", err);
      });

    // await fetch(
    //   "https://docs.google.com/forms/u/1/d/e/1FAIpQLScxhTEMUyFIZXzklLmrBzAYJ8f-h4FG8bAAAQhG469vySSFVA/formResponse",
    //   {
    //     method: "POST",
    //     // body: JSON.stringify(e),
    //     body: e,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // )
    //   .then(response => response.json())
    //   .then(data => console.log(data));

    // const doSubmit = async e => {
    //   e.preventDefault();

    //   const { inputs } = formState;
    //   const formData = new FormData();

    //   _.map(inputs, item => {
    //     formData.append(`entry.${item.id}`, item.value);
    //   });

    // await axios({
    //   url: `${config.formUrl}`,
    //   method: "post",
    //   data: formData,
    //   responseType: "json",
    // })
    //   .then(response => {
    //     console.log("response", response);
    //   })
    //   .catch(err => {
    //     console.log("err", err);
    //   });
    // };
  };

  return (
    <div>
      <form name="GoogleForm" onSubmit={submitHandler}>
        {RenderSwitch(step)}
      </form>
    </div>
  );
};

export default HelperFormTemp;
