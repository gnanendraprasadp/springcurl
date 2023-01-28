import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import client from "./../../asset/client.json";

const Java = ({ java, setJava }) => {
  const javaVer = client.javaVersion.values;

  return (
    <>
      <FormControl>
        <FormLabel id="java-radio-button-group" focused={true} style={{color:"#000"}}>
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
              control={<Radio  style={{color:"#000"}}/>}
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
