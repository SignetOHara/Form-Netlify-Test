import React from "react";

import classes from "../form.module.scss";

const LastPage = ({ setFormStep, register, watch }) => {
  let other = false;

  if (watch("other")) {
    other = true;
  }

  const checker = watch("howDidTheyKnow") || other === true;

  return (
    <section className={classes.stepContainer}>
      <div className={classes.checkboxContainer}>
        <div className={classes.checkboxElement}>
          <p>How did your hear about Beats &amp; Steps?</p>
          <label htmlFor="website">
            <input
              type="radio"
              id="website"
              {...register("howDidTheyKnow")}
              value="website"
            />
            Website
          </label>
          <label htmlFor="facebook">
            <input
              type="radio"
              id="facebook"
              {...register("howDidTheyKnow")}
              value="facebook"
            />
            Facebook
          </label>
          <label htmlFor="instagram">
            <input
              type="radio"
              id="instagram"
              {...register("howDidTheyKnow")}
              value="instagram"
            />
            Instagram
          </label>
          <label htmlFor="youtube">
            <input
              type="radio"
              id="youtube"
              {...register("howDidTheyKnow")}
              value="youtube"
            />
            Youtube
          </label>
          <label htmlFor="friends">
            <input
              type="radio"
              id="friends"
              {...register("howDidTheyKnow")}
              value="friends"
            />
            Friends or Family
          </label>
          <div className={classes.other}>
            <label htmlFor="other">
              Other:
              <input type="text" {...register("other")} id="other" />
            </label>
          </div>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <button
          className={classes.backButton}
          type="button"
          onClick={() => setFormStep(1)}
        >
          Back
        </button>
        <button type="submit" disabled={!checker}>
          Send
        </button>
      </div>
    </section>
  );
};

export default LastPage;
