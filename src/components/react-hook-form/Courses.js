import React from "react";

import classes from "../../styles/react-hook-form/form.module.scss";

const Courses = () => {
  return (
    <section className={classes.step}>
      <div className={classes.formElement}>
        <h4>Please select the course you are interested in</h4>
        <p>Please choose one of the following options:</p>
        <label htmlFor="dance">
          <input
            type="radio"
            id="dance"
            name="entry.1225244029"
            value="Dance"
          />
          Dance
        </label>
        <label htmlFor="music">
          <input
            type="radio"
            id="music"
            name="entry.1225244029"
            value="Music"
          />
          Music
        </label>
        <label htmlFor="danceMusic">
          <input
            type="radio"
            id="danceMusic"
            name="entry.1225244029"
            value="Dance and Music"
          />
          Dance and Music
        </label>
      </div>
    </section>
  );
};

export default Courses;
