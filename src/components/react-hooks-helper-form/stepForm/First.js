import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const First = ({ formData, setFormData, navigation }) => {
  const { name, email, enrolleeName, enrolleeAge, number } = formData;
  
  return (
    <Container maxWidth="xs">
      <h3>Name</h3>
      <TextField
        label="Your Name"
        name="name"
        value={name}
        onChange={setFormData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Your Email"
        name="email"
        value={email}
        onChange={setFormData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Your Enrollee's Name"
        name="enrolleeName"
        value={enrolleeName}
        onChange={setFormData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Your Enrollee's Age"
        name="enrolleeAge"
        value={enrolleeAge}
        onChange={setFormData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Your Number"
        name="number"
        value={number}
        onChange={setFormData}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={navigation.next}
      >
        Next
      </Button>
    </Container>
  );
};

export default First;
