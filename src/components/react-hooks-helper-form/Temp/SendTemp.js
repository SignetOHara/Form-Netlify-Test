import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";

const SendTemp = ({ formState, setFormState, navigation }) => {
  const {
    course,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    awareness,
  } = formState;

  const navigationHandler = course => {
    if (course === "dance") {
      navigation.go("dance");
    } else if (course === "music") {
      navigation.go("music");
    } else if (course === "danceAndMusic") {
      navigation.go("danceAndMusic");
    }
  };

  return (
    <Container maxWidth="xs">
      <h4>Please select your availability</h4>
      <p>Please select all the days you are available:</p>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={monday}
              onChange={setFormState}
              name="monday"
              color="primary"
            />
          }
          label="Monday"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={tuesday}
              onChange={setFormState}
              name="tuesday"
              color="primary"
            />
          }
          label="Tuesday"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={wednesday}
              onChange={setFormState}
              name="wednesday"
              color="primary"
            />
          }
          label="Wednesday"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={thursday}
              onChange={setFormState}
              name="thursday"
              color="primary"
            />
          }
          label="Thursday"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={friday}
              onChange={setFormState}
              name="friday"
              color="primary"
            />
          }
          label="Friday"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={saturday}
              onChange={setFormState}
              name="saturday"
              color="primary"
            />
          }
          label="Saturday"
        />
      </FormGroup>
      <FormLabel component="legend">
        How did you hear about Beats &amp; Steps?
      </FormLabel>
      <RadioGroup
        aria-label="How did your hear about Beats and Steps?"
        name="awareness"
        value={awareness}
        onChange={setFormState}
      >
        <FormControlLabel value="website" control={<Radio />} label="Website" />
        <FormControlLabel
          value="facebook"
          control={<Radio />}
          label="Facebook"
        />
        <FormControlLabel
          value="instagram"
          control={<Radio />}
          label="Instagram"
        />
        <FormControlLabel value="youtube" control={<Radio />} label="Youtube" />
        <FormControlLabel
          value="friends or family"
          control={<Radio />}
          label="Friends or Family"
        />
        <FormControlLabel
          /*****************
           *
           *
           *       // NEED TO SORT OUT THIS AND FINISH VIDEO - Up to 40:00 - multi step form with React ***
           *
           * // ALSO From 35:00 - IF going to use this form, should add the review / accordian section too
           *
           *
           *
           *****************/

          control={<Radio />}
          value="other"
          label={
            <TextField
              label="other"
              name="awareness"
              value=""
              onChange={setFormState}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              fullWidth
            />
          }
        />
      </RadioGroup>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigationHandler(course)}
        style={{ margin: "1rem 2rem 0 0" }}
      >
        Back
      </Button>
      <button type="submit">Send</button>
      {/* <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.go("success")}
      >
        Send
      </Button> */}
    </Container>
  );
};

export default SendTemp;
