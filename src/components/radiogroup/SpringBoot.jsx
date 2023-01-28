import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import client from "./../../asset/client.json";

const SpringBoot = ({ springboot, setSpringboot }) => {
  const bootVersion = client.bootVersion.values;
  return (
    <>
      <FormControl>
        <FormLabel
          id="springboot-radio-button-group"
          focused={true}
          style={{color:"#000"}}
        >
          Springboot
        </FormLabel>
        <RadioGroup
          row
          name="springboot"
          aria-labelledby="springboot-radio-button-group"
          value={springboot}
          onChange={(event) => setSpringboot(event.target.value)}
        >
          {bootVersion.map((data, index) => (
            <FormControlLabel
              key={index}
              value={data.id}
              control={<Radio style={{color:"#000"}} />}
              label={data.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <br />
    </>
  );
};

export default SpringBoot;
