import React from "react";
import { useForm } from 'react-hook-form';

import Button from "./Button";
import classes from "../../styles/react-hook-form/form.module.scss";

const FirstPage = (props) => {
const { watch, register } = useForm();

  return (
    <section className={classes.step}>
      <div className={classes.formElement}>
        <label htmlFor="name">
          Your name
          <input
            className={classes.formElement__input}
            type="text"
            name="entry.948298105"
            id="name"
            ref={register()}
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
      <Button click={props} />
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </section>
  );
};

export default FirstPage;
