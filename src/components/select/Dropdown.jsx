import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import client from "./../../asset/client.json";
import ListSubheader from "@mui/material/ListSubheader";

const Dropdown = () => {
  const data = client.dependencies.data;
  for (let i = 0; i < data.length; i++) {
    let nestdata = data[i].values;
  }

  return <></>;
};

export default Dropdown;
