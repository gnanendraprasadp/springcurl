import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import client from "../asset/client.json";

const Java = ({ java, setJava }) => {
  const javaVer = client.javaVersion.values;

  return (
    <>
      <FormControl>
        <FormLabel
          id="java-radio-button-group"
          focused={true}
          style={{ color: "#000" }}
        >
          Java
        </FormLabel>
        <RadioGroup
          row
          name="java"
          aria-labelledby="java-radio-button-group"
          value={java}
          onChange={(event) => setJava(event.target.value)}
        >
          {javaVer.map((data, index) => (
            <FormControlLabel
              key={index}
              value={data.id}
              control={<Radio style={{ color: "#000" }} />}
              label={data.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <br />
      <br />
    </>
  );
};

export default Java;
