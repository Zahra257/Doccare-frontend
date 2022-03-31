import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const FicheMedical = ({row}) => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 0, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Poids" variant="standard" />
        <TextField id="standard-basic" label="Maladie chronique" variant="standard" />
        <TextField id="standard-basic" label="Groupe sanguin" variant="standard" />
        <TextField id="standard-basic" label="Maladie infectueuse" variant="standard" />
        <TextField id="standard-basic" label="Allergie" variant="standard" />
        <TextField id="standard-basic" label="Habitude toxique" variant="standard" />
        <TextField id="standard-basic" label="Chirurgie antérieure" variant="standard" />
        <TextField id="standard-basic" label="Maladie héréditaire" variant="standard" />
        <TextField id="standard-basic" label="Autre antécédants" variant="standard" />

      </Box>
    </div>
  );
};

export default FicheMedical;
