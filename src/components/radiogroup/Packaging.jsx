import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import client from "./../../asset/client.json";

const Packaging = ({ packaging, setPackaging }) => {
  const packages = client.packaging.values;
  return (
    <>
      <FormControl>
        <FormLabel
          id="packaging-radio-button-group"
          focused={true}
          color="success"
        >
          Packaging
        </FormLabel>
        <RadioGroup
          row
          name="packaging"
          aria-labelledby="packaging-radio-button-group"
          value={packaging}
          onChange={(event) => setPackaging(event.target.value)}
        >
          {packages.map((data, index) => (
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

export default Packaging;
