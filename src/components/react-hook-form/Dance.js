import React from "react";

import classes from "../../styles/react-hook-form/form.module.scss";

const Dance = () => {
  return (
    <section className={classes.step}>
      <div className={classes.formElement}>
        <h4>Dance Courses</h4>
        <p>Please select one or more options:</p>
        <label htmlFor="ballet">
          <input
            type="checkbox"
            id="ballet"
            name="entry.1142331793"
            value="Ballet"
          />
          Ballet
        </label>
        <label htmlFor="jazz">
          <input
            type="checkbox"
            id="jazz"
            name="entry.1142331793"
            value="Jazz"
          />
          Jazz
        </label>
        <label htmlFor="hiphop">
          <input
            type="checkbox"
            id="hiphop"
            name="entry.1142331793"
            value="Hiphop"
          />
          Hiphop
        </label>
      </div>
    </section>
  );
};

export default Dance;
