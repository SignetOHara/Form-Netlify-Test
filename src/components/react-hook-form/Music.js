import React from "react";

import classes from "../../styles/react-hook-form/form.module.scss";

const Music = () => {
  return (
    <section className={classes.step}>
      <div className={classes.formElement}>
        <h4>Music Courses</h4>
        <p>Please select one or more options:</p>
        <label htmlFor="voice">
          <input
            type="checkbox"
            id="voice"
            name="entry.637071218"
            value="Voice"
          />
          Voice
        </label>
        <label htmlFor="piano">
          <input
            type="checkbox"
            id="piano"
            name="entry.637071218"
            value="Piano"
          />
          Piano
        </label>
        <label htmlFor="guitar">
          <input
            type="checkbox"
            id="guitar"
            name="entry.637071218"
            value="Guitar"
          />
          Guitar
        </label>
        <label htmlFor="violin">
          <input
            type="checkbox"
            id="violin"
            name="entry.637071218"
            value="Violin"
          />
          Violin
        </label>
      </div>
    </section>
  );
};

export default Music;
