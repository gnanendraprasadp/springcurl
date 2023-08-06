import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from "@mui/material";
import client from "./../asset/client.json";

const Language = ({ language, setLanguage }) => {
  const languages = client.language.values;
  return (
    <>
      <FormControl>
        <FormLabel
          id="language-radio-button-group"
          focused={true}
          style={{ color: "#000" }}
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

export default Language;
