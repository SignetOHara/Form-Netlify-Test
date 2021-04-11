import React from "react";
import Container from "@material-ui/core/Container";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";

import Button from "@material-ui/core/Button";

const CoursesTemp = ({ formState, setFormState, setFormStep }) => {
  const {
    course: { ballet, jazz, hiphop, voice, piano, guitar, violin },
  } = formState;

  return (
    <Container maxWidth="xs">
      <h3>Courses</h3>
      <p>Please choose all the courses you are interested in:</p>
      <FormGroup>
        <h4>Dance</h4>
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
      <FormGroup>
        <h4>Music</h4>
        <FormControlLabel
          control={
            <Checkbox
              checked={voice}
              onChange={setFormState}
              name="voice"
              color="primary"
            />
          }
          label="Voice"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={piano}
              onChange={setFormState}
              name="piano"
              color="primary"
            />
          }
          label="Piano"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={guitar}
              onChange={setFormState}
              name="guitar"
              color="primary"
            />
          }
          label="Guitar"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={violin}
              onChange={setFormState}
              name="violin"
              color="primary"
            />
          }
          label="Violin"
        />
      </FormGroup>
      <Button
        variant="contained"
        color="secondary"
        onClick={setFormStep(1)}
        style={{ margin: "1rem 2rem 0 0" }}
      >
        Back
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={setFormStep(2)}
      >
        Next
      </Button>
    </Container>
  );
};

export default CoursesTemp;
