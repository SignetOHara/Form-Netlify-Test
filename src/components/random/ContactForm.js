import React, { useState } from "react";
import axios from "axios";
import { map } from "lodash";

const config = {
  // cors: 'https://cors-anywhere.herokuapp.com/', // <optional> doesn't display the cors error, still works even with error (need to check why)
  formUrl:
    "https://docs.google.com/forms/u/1/d/e/1FAIpQLSf8BTJjWY18cqIoFwYk2GweAsYbZFNP6pya7WG44zSJYWKNpA/formResponse",
};

const Input = ({ name, label, doChange, type = "text" }) => {
  return (
    <label htmlFor={name} className="form-label">
      {label}
      <input type={type} id={name} name={name} onChange={doChange} />
    </label>
  );
};

const ContactForm = () => {
  const state = {
    inputs: {
      name: { id: 1275594160, value: "" },
      email: { id: 247190379, value: "" },
      // phone: { id: 1166974658, value: null },
      // message: { id: 839337160, value: "" },
    },
  };

  const [formState, setFormState] = useState(state);

  const doSubmit = async e => {
    e.preventDefault();

    const { inputs } = formState;
    const formData = new FormData();

    // THIS USES LODASH
    map(inputs, item => {
      formData.append(`entry.${item.id}`, item.value);
    });

    // THIS NON-LODASH APPROACH IS NOT WORKING
    // [inputs].map((item) => {
    // 	formData.append(`entry.${item.id}`, item.value);
    // });

    await axios({
      url: `${config.formUrl}`,
      method: "post",
      data: formData,
      responseType: "json",
    })
      .then(response => {
        console.log("response", response);
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  // THIS FETCH FUNCTION IS NOT WORKING
  // 	await fetch(
  // 		'https://docs.google.com/forms/u/1/d/e/1FAIpQLSf8BTJjWY18cqIoFwYk2GweAsYbZFNP6pya7WG44zSJYWKNpA/formResponse',
  // 		{
  // 			method: 'POST',
  // 			body: JSON.stringify(formData),
  // 			headers: {
  //         'Accept': 'application/json',
  // 				'Content-Type': 'application/json',
  // 			},
  // 		}
  // 	)
  // 		.then((response) => response.json)
  // 		.then((res) => console.log(res))
  // 		.catch((err) => {
  // 			console.log('err', err);
  // 		});

  const handleChange = e => {
    const { value, name } = e.target;
    const { inputs } = formState;
    inputs[name].value = value;
    setFormState({ inputs });
  };

  return (
    <form name="contact-form" onSubmit={doSubmit}>
      <fieldset>
        <legend>Contact Form</legend>

        <Input name="name" label="Name" doChange={handleChange} />
        <Input
          name="email"
          label="Email"
          doChange={handleChange}
          type="email"
        />
        {/* <Input name="phone" label="Phone number" doChange={handleChange} /> */}

        {/* <label htmlFor="message" className="form-label">
          Message
          <textarea id="message" name="message" onChange={handleChange} />
        </label> */}

        <p>
          <button className="btn" type="submit">
            Send message
          </button>
        </p>
      </fieldset>
    </form>
  );
};

export default ContactForm;
