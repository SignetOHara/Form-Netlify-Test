import React from "react";

import classes from "../../styles/react-hook-form/form.module.scss";

const DanceAndMusic = () => {
  return (
    <section className={classes.step}>
      <div className={classes.formElement}>
        <h4>Dance &amp; Music Courses</h4>
        <p>Please select all the courses you are interested in:</p>
        <div className={classes.danceBlock}>
          <h5>Dance Courses</h5>
          <label htmlFor="ballet">
            <input
              type="checkbox"
              id="ballet"
              name="entry.96179947"
              value="Ballet"
            />
            Ballet
          </label>
          <label htmlFor="jazz">
            <input
              type="checkbox"
              id="jazz"
              name="entry.96179947"
              value="Jazz"
            />
            Jazz
          </label>
          <label htmlFor="hiphop">
            <input
              type="checkbox"
              id="hiphop"
              name="entry.96179947"
              value="Hiphop"
            />
            Hiphop
          </label>
        </div>
        <div className={classes.musicBlock}>
          <h5>Music Courses</h5>
          <label htmlFor="voice">
            <input
              type="checkbox"
              id="voice"
              name="entry.1321373223"
              value="Voice"
            />
            Voice
          </label>
          <label htmlFor="piano">
            <input
              type="checkbox"
              id="piano"
              name="entry.1321373223"
              value="Piano"
            />
            Piano
          </label>
          <label htmlFor="guitar">
            <input
              type="checkbox"
              id="guitar"
              name="entry.1321373223"
              value="Guitar"
            />
            Guitar
          </label>
          <label htmlFor="violin">
            <input
              type="checkbox"
              id="violin"
              name="entry.1321373223"
              value="Violin"
            />
            Violin
          </label>
        </div>
      </div>
    </section>
  );
};

export default DanceAndMusic;
