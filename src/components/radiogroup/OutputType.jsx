import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import client from "./../../asset/client.json";

const FormLabelUtils = ({ format, setFormat }) => {
  const output = client.outputType.values;
  return (
    <>
      <FormControl>
        <FormLabel
          id="output-format-radio-button-group"
          focused={true}
          color="success"
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
              control={<Radio color="success" />}
              label={data.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};
export default FormLabelUtils;
