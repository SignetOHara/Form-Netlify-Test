import React from "react";

import classes from "../form.module.scss";

const Success = () => {
  return (
    <section className={classes.stepContainer}>
      <div className={classes.successContainer}>
        <p>Thank you for your inquiry! We will contact you shortly.</p>
      </div>
    </section>
  );
};

export default Success;
