import TextField from "@mui/material/TextField";
import "./../../css/data.css";

const TextInput = ({ label, value, onChange }) => {
  return (
    <>
      <TextField
        color="success"
        className="textfield"
        id="outlined-basic"
        label={label}
        variant="outlined"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default TextInput;
