import React, { useState } from "react";
import { useForm } from "react-hook-form";

// import FirstPage from "./FirstPage";
// import Courses from "./Courses";
// import Dance from "./Dance";
// import Music from "./Music";
// import DanceAndMusic from "./DanceAndMusic";
// import LastPage from "./LastPage";
// import Success from "./Success";
import classes from "../../styles/react-hook-form/form.module.scss";

const Form = () => {
  // const [formStep, setFormStep] = useState(0);
  // const props = { formStep, setFormStep };

  const { watch, register } = useForm();

  return (
    <section className={classes.formSectionContainer}>
      <form
        action="https://docs.google.com/forms/u/1/d/e/1FAIpQLScxhTEMUyFIZXzklLmrBzAYJ8f-h4FG8bAAAQhG469vySSFVA/formResponse"
        method="post"
      >
        <div className={classes.formElement__header}>
          <h3>Beats &amp; Steps Arts Academy Enrollment</h3>
        </div>
        <section className={classes.step}>
          <div className={classes.formElement}>
            <label htmlFor="name">
              Your name
              <input
                className={classes.formElement__input}
                type="text"
                // name="entry.948298105"
                {...register("entry.948298105")}
                id="name"
              />
            </label>
          </div>
          <div className={classes.formElement}>
            <label htmlFor="email">
              Your email
              <input
                className={classes.formElement__input}
                type="email"
                name="emailAddress"
                id="email"
              />
            </label>
          </div>
          <div className={classes.formElement}>
            <label htmlFor="enrolleeName">
              Please enter the name of your enrollee
              <input
                className={classes.formElement__input}
                type="text"
                name="entry.975484240"
                id="enrolleeName"
              />
            </label>
          </div>
          <div className={classes.formElement}>
            <label htmlFor="enrolleeAge">
              Please enter the age of your enrollee (number between 2 - 18)
              <input
                className={classes.formElement__input}
                type="number"
                name="entry.1597179350"
                id="enrolleeAge"
                min="2"
                max="18"
              />
            </label>
          </div>
          <div className={classes.formElement}>
            <label htmlFor="number">
              Your contact number
              <input
                className={classes.formElement__input}
                type="text"
                name="entry.1623204483"
                id="number"
              />
            </label>
          </div>
          <button type="button">Next</button>
          <pre>{JSON.stringify(watch(), null, 2)}</pre>
        </section>
      </form>
    </section>
  );
};

export default Form;
