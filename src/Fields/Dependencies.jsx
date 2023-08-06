import {
  Button,
  Checkbox,
  Dialog,
  DialogActions, DialogContent, DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  TextField
} from "@mui/material";
import React from "react";
import client from "../asset/client.json";

const Dependencies = ({ label, dependency, setDependency }) => {
  const [open, setOpen] = React.useState(false);

  const dialogOpen = () => {
    setOpen(true);
  };

  const dialogClose = () => {
    setOpen(false);
  };

  const dependencyData = client.dependencies.data;
  const dependencyToAdd = [];

  const addedDependency = (data) => {
    let uniqueDependency = [...new Set(data)];
    setDependency(uniqueDependency.toString());
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={dialogClose}>
        <DialogTitle id="alert-dialog-title">Add Dependencies</DialogTitle>

        <DialogContent dividers={true}>
          {dependencyData.map((data, index) => (
            <List key={index}>
              <ListItem>
                <ListItemText>
                  <b>{data.name}</b>
                  {data.values.map((data, index) => (
                    <div key={index + 1}>
                      <Checkbox
                        onChange={() => dependencyToAdd.push(data.id)}
                      />
                      <span>{data.name}</span>
                      <DialogContentText>{data.description}</DialogContentText>
                      <br />
                    </div>
                  ))}
                </ListItemText>
              </ListItem>
            </List>
          ))}
        </DialogContent>

        <DialogActions>
          <Button onClick={dialogClose}>Cancel</Button>
          <Button onClick={() => addedDependency(dependencyToAdd)}>Add</Button>
        </DialogActions>
      </Dialog>

      <TextField
        fullWidth
        id="outlined-basic"
        label={label}
        variant="outlined"
        placeholder="No Dependency Selected"
        value={dependency}
        InputProps={{
          readOnly: true,
        }}
      />
      <br />
      <br />

      <Button onClick={dialogOpen} variant="outlined">
        Add Dependencies
      </Button>
      <br />
      <br />
    </div>
  );
};

export default Dependencies;
