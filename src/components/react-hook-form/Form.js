import React, { useState } from "react";

import FirstPage from "./FirstPage";
import Courses from "./Courses";
import Dance from "./Dance";
import Music from "./Music";
import DanceAndMusic from "./DanceAndMusic";
import LastPage from "./LastPage";
import Success from "./Success";
import classes from "../../styles/react-hook-form/form.module.scss";

const Form = () => {
  const [formStep, setFormStep] = useState(0);
  const props = { formStep, setFormStep };

  return (
    <section className={classes.formSectionContainer}>
      <form
        action="https://docs.google.com/forms/u/1/d/e/1FAIpQLScxhTEMUyFIZXzklLmrBzAYJ8f-h4FG8bAAAQhG469vySSFVA/formResponse"
        method="post"
      >
        <div className={classes.formElement__header}>
          <h3>Beats &amp; Steps Arts Academy Enrollment</h3>
        </div>
        {formStep === 0 && <FirstPage {...props} />}
        {formStep === 1 && <Courses {...props} />}
        {formStep === 2 && <Dance {...props} />}
        {formStep === 3 && <Music {...props} />}
        {formStep === 4 && <DanceAndMusic {...props} />}
        {formStep === 5 && <LastPage {...props} />}
        {formStep === 6 && <Success {...props} />}
      </form>
    </section>
  );
};

export default Form;
