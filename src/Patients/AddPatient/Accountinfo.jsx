import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Input } from "@mui/material";

const Accountinfo = ({ row, HandelAddPatient }) => {



  return (
    
    <div>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Email"
          name = "Email"
          variant="standard"
          value={row ? row.Email : null}
          onChange = {HandelAddPatient}

        />

        { !row && (
          <TextField
            id="standard-basic"
            label="Mot de passe"
            name = "password"
            variant="standard"
            onChange = {HandelAddPatient}
          />
        )}

        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            Label = "Avatar"
            name = "Avatar"
            multiple
            type="file"
            onChange = {HandelAddPatient}
           
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
      </Box>
    </div>
  );
};

export default Accountinfo;
