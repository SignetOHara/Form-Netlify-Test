import React from "react";
import Container from "@material-ui/core/Container";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";

import Button from "@material-ui/core/Button";

const DanceMusic = ({ formData, setFormData, navigation }) => {
  const { ballet, jazz, hiphop, voice, piano, guitar, violin } = formData;

  return (
    <Container maxWidth="xs">
      <h3>Dance &amp; Music</h3>
      <p>Select all the courses you are interested in:</p>
      <FormGroup>
        <h4>Dance</h4>
        <FormControlLabel
          control={
            <Checkbox
              checked={ballet}
              onChange={setFormData}
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
              onChange={setFormData}
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
              onChange={setFormData}
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
              onChange={setFormData}
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
              onChange={setFormData}
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
              onChange={setFormData}
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
              onChange={setFormData}
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
        onClick={() => navigation.go("courses")}
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

export default DanceMusic;
