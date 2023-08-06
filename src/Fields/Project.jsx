import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import client from "./../asset/client.json";

const Project = ({ project, setProject }) => {
  const projectType = client.projectType.values;
  return (
    <>
      <FormControl>
        <FormLabel
          id="project-radio-button-group"
          focused={true}
          style={{color:"#000"}}
        >
          Project
        </FormLabel>
        <RadioGroup
          row
          name="project"
          aria-labelledby="project-radio-button-group"
          value={project}
          onChange={(event) => setProject(event.target.value)}
        >
          {projectType.map((data, index) => (
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

export default Project;
