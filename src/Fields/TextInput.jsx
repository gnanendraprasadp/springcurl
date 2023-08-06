import { TextField } from "@mui/material";
import "./../css/data.css";

const TextInput = ({ label, value, onChange }) => {
  return (
    <>
      <TextField
        fullWidth
        style={{ color: "#000" }}
        id="outlined-basic"
        label={label}
        variant="outlined"
        value={value}
        onChange={onChange}
      />
      <br />
      <br />
    </>
  );
};

export default TextInput;
