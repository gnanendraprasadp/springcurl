import TextField from "@mui/material/TextField";
import "./../../css/data.css";

const TextInput = ({ label, value, onChange }) => {
  return (
    <>
      <TextField
        fullWidth
        color="success"
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
