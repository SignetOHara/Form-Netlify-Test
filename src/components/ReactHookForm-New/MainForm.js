import React, { useState } from "react";
import { useForm } from "react-hook-form";

import FirstPage from "./steps/FirstPage";
import Courses from "./steps/Courses";
import LastPage from "./steps/LastPage";
import Success from "./steps/Success";
import Failure from "./steps/Failure";
import classes from "./form.module.scss";

const MainForm = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isDirty, isValid },
    getValues,
  } = useForm({ mode: "onTouched" });

  const [formStep, setFormStep] = useState(0);

  const props = {
    setFormStep,
    register,
    errors,
    isDirty,
    isValid,
    getValues,
    watch,
  };

  function encode(data) {
    const transformedData = Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
    return transformedData;
  }

  const submitHandler = (data, e) => {
    if (
      (data.howDidTheyKnow === null ||
        data.howDidTheyKnow === undefined ||
        data.howDidTheyKnow === false) &&
      (data.other === undefined || data.other === null || data.other === "")
    ) {
      alert("Please choose one option or complete Other field");
    } else {
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "Contact-form",
          ...data,
        }),
      })
        .then(res => {
          if (res.status === 404) {
            console.log(res);
            setFormStep(4);
          } else {
            console.log(res);
            setFormStep(3);
          }
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <form
      className={classes.form}
      name="Contact-form"
      data-netlify="true"
      onSubmit={handleSubmit(submitHandler)}
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Contact-form" />
      <input type="hidden" name="name" />
      <input type="hidden" name="email" />
      <input type="hidden" name="enrolleeName" />
      <input type="hidden" name="enrolleeAge" />
      <input type="hidden" name="mobileNumber" />
      <input type="hidden" name="ballet" />
      <input type="hidden" name="jazz" />
      <input type="hidden" name="hiphop" />
      <input type="hidden" name="voice" />
      <input type="hidden" name="piano" />
      <input type="hidden" name="guitar" />
      <input type="hidden" name="violin" />
      <input type="hidden" name="howDidTheyKnow" />
      <input type="hidden" name="other" />
      {/* Add logo here when using in main B&S site */}
      <h2>Beats &amp; Steps Enrollment Form</h2>
      {formStep === 0 && <FirstPage {...props} />}
      {formStep === 1 && <Courses {...props} />}
      {formStep === 2 && <LastPage {...props} />}
      {formStep === 3 && <Success />}
      {formStep === 4 && <Failure />}
    </form>
  );
};

export default MainForm;
