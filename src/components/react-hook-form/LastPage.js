import React from "react";

import classes from "../../styles/react-hook-form/form.module.scss";

const LastPage = () => {
  return (
    <section className={classes.step}>
      <div className={classes.formElement}>
        <h4>Please select your availability</h4>
        <p>Please select all the days you are available:</p>
        <div className={classes.availabilityBlock}>
          <label htmlFor="monday">
            <input
              type="checkbox"
              id="monday"
              name="entry.1325613364"
              value="Monday"
            />
            Monday
          </label>
          <label htmlFor="tuesday">
            <input
              type="checkbox"
              id="tuesday"
              name="entry.1325613364"
              value="Tuesday"
            />
            Tuesday
          </label>
          <label htmlFor="wednesday">
            <input
              type="checkbox"
              id="wednesday"
              name="entry.1325613364"
              value="Wednesday"
            />
            Wednesday
          </label>
          <label htmlFor="thursday">
            <input
              type="checkbox"
              id="thursday"
              name="entry.1325613364"
              value="Thursday"
            />
            Thursday
          </label>
          <label htmlFor="friday">
            <input
              type="checkbox"
              id="friday"
              name="entry.1325613364"
              value="Friday"
            />
            Friday
          </label>
          <label htmlFor="saturday">
            <input
              type="checkbox"
              id="saturday"
              name="entry.1325613364"
              value="Saturday"
            />
            Saturday
          </label>
        </div>
        <div className={classes.howBlock}>
          <p>How did your hear about Beats &amp; Steps?</p>
          <label htmlFor="website">
            <input
              type="radio"
              id="website"
              name="entry.363463668"
              value="Website"
            />
            Website
          </label>
          <label htmlFor="facebook">
            <input
              type="radio"
              id="facebook"
              name="entry.363463668"
              value="Facebook"
            />
            Facebook
          </label>
          <label htmlFor="instagram">
            <input
              type="radio"
              id="instagram"
              name="entry.363463668"
              value="Instagram"
            />
            Instagram
          </label>
          <label htmlFor="youtube">
            <input
              type="radio"
              id="youtube"
              name="entry.363463668"
              value="Youtube"
            />
            Youtube
          </label>
          <label htmlFor="friends">
            <input
              type="radio"
              id="friends"
              name="entry.363463668"
              value="Friends or Family"
            />
            Friends or Family
          </label>
          <label htmlFor="other">
            <input type="radio" name="entry.363463668" value="" />
            Other: <input id="other" type="text" name="entry.363463668" />
          </label>
        </div>
      </div>
    </section>
  );
};

export default LastPage;
