import React from "react";
import { register, watch } from "react-hook-form";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const FirstTemp = ({ control, setFormStep }) => {
  // const {
  //   contactInfo: { name, email, enrolleeName, enrolleeAge, mobileNumber },
  // } = formState;

  console.log(watch("name")); // watch input value by passing the name of it

  return (
    <Container maxWidth="xs">
      <h3>Name</h3>
      <TextField
        label="Your Name"
        name="name"
        inputRef={register}
        // value={name}
        // onChange={setFormState}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      {/* <TextField
        label="Your Email"
        name="email"
        value={email}
        inputRef={...register("email")}
        onChange={setFormState}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Your Enrollee's Name"
        name="enrolleeName"
        value={enrolleeName}
        onChange={setFormState}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Your Enrollee's Age"
        name="enrolleeAge"
        value={enrolleeAge}
        onChange={setFormState}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Your Number"
        name="number"
        value={mobileNumber}
        onChange={setFormState}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      /> */}
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={setFormStep(1)}
      >
        Next
      </Button>
    </Container>
  );
};

export default FirstTemp;
