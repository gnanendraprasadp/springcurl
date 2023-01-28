import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import client from "./../../asset/client.json";

const Language = ({ language, setLanguage }) => {
  const languages = client.language.values;
  return (
    <>
      <FormControl>
        <FormLabel
          id="language-radio-button-group"
          focused={true}
          color="success"
        >
          Language
        </FormLabel>
        <RadioGroup
          row
          name="language"
          aria-labelledby="language-radio-button-group"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        >
          {languages.map((data, index) => (
            <FormControlLabel
              key={index}
              value={data.id}
              control={<Radio color="success" />}
              label={data.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <br />
    </>
  );
};

export default Language;
