import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const SendTemp = ({ formState, setFormState, setFormStep }) => {
  const { awareness } = formState;

  return (
    <Container maxWidth="xs">
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
        onClick={setFormStep(1)}
        style={{ margin: "1rem 2rem 0 0" }}
      >
        Back
      </Button>
      <button type="submit">Send</button>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem" }}
        type="submit"
        label="submit"
      >
        Send
      </Button>
    </Container>
  );
};

export default SendTemp;
