import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import client from "./../../asset/client.json";

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
