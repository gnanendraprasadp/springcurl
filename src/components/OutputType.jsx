import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import client from "./../asset/client.json";

const FormLabelUtils = ({ format, setFormat }) => {
  const output = client.outputType.values;
  return (
    <>
      <FormControl>
        <FormLabel
          id="output-format-radio-button-group"
          focused={true}
          style={{ color: "#000" }}
        >
          Output Format
        </FormLabel>
        <RadioGroup
          row
          name="output-format"
          aria-labelledby="output-format-radio-button-group"
          value={format}
          onChange={(event) => setFormat(event.target.value)}
        >
          {output.map((data, index) => (
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
    </>
  );
};
export default FormLabelUtils;
