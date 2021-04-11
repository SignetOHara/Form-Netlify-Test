import React from "react";
import Container from "@material-ui/core/Container";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";

import Button from "@material-ui/core/Button";

const DanceTemp = ({ formState, setFormState, navigation }) => {
  const { ballet, jazz, hiphop } = formState;

  return (
    <Container maxWidth="xs">
      <h3>Dance</h3>
      <p>Select which courses you are interested in:</p>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={ballet}
              onChange={setFormState}
              name="ballet"
              color="primary"
            />
          }
          label="Ballet"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={jazz}
              onChange={setFormState}
              name="jazz"
              color="primary"
            />
          }
          label="Jazz"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={hiphop}
              onChange={setFormState}
              name="hiphop"
              color="primary"
            />
          }
          label="Hiphop"
        />
      </FormGroup>
      <Button
        variant="contained"
        color="secondary"
        onClick={navigation.previous}
        style={{ margin: "1rem 2rem 0 0" }}
      >
        Back
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.go("send")}
      >
        Next
      </Button>
    </Container>
  );
};

export default DanceTemp;
