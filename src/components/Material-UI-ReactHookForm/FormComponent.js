import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import FirstPage from "./pages/FirstPage";
import Courses from "./pages/Courses";
import LastPage from "./pages/LastPage";
import Success from "./pages/Success";

const defaultData = {
  contactInfo: {
    name: "",
    email: "",
    enrolleeName: "",
    enrolleeAge: "",
    mobileNumber: "",
  },
  course: {
    ballet: false,
    jazz: false,
    hiphop: false,
    voice: false,
    piano: false,
    guitar: false,
    violin: false,
  },
  awareness: "",
};

const MyForm = () => {
  const { handleSubmit } = useForm();
  const { control } = useForm();
  const [formStep, setFormStep] = useState(0);

  const props = { control, setFormStep };
 
  const submitHandler = data => {
    console.log(data);
    return <Success />;
  };

  return (
    <form
      name="Contact Form"
      data-netlify="true"
      onSubmit={handleSubmit(submitHandler)}
    >
      <input type="hidden" name="form-name" value="Contact Form" />
      {formStep === 0 && <FirstPage {...props} />}
      {formStep === 1 && <Courses {...props} />}
      {formStep === 2 && <LastPage {...props} />}
    </form>
  );
};

export default MyForm;
