import React from "react";
import Container from "@material-ui/core/Container";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

import Button from "@material-ui/core/Button";

const CoursesTemp = ({ formState, setFormState, navigation }) => {
  const { course } = formState;

  const navigationHandler = course => {
    if (course === "dance") {
      navigation.go("dance");
    } else if (course === "music") {
      navigation.go("music");
    } else if (course === 'danceAndMusic') {
      navigation.go("danceAndMusic");
    }
  };

  return (
    <Container maxWidth="xs">
      <h3>Courses</h3>
      <p>Please choose one of the following options:</p>
      <FormLabel component="legend">Courses</FormLabel>
      <RadioGroup
        aria-label="courses"
        name="course"
        value={course}
        onChange={setFormState}
      >
        <FormControlLabel value="dance" control={<Radio />} label="Dance" />
        <FormControlLabel value="music" control={<Radio />} label="Music" />
        <FormControlLabel
          value="danceAndMusic"
          control={<Radio />}
          label="Dance and Music"
        />
      </RadioGroup>
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
        onClick={() => navigationHandler(course)}
      >
        Next
      </Button>
    </Container>
  );
};

export default CoursesTemp;
