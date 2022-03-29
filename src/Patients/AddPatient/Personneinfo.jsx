import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Personneinfo = () => {
  return (
    <div>

<Box
        component="form"
        sx={{
          "& > :not(style)": { m: 0.5, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Nom" variant="standard" />
        <TextField id="standard-basic" label="Prenom" variant="standard" />
        <TextField id="standard-basic" label="CIN" variant="standard" />
        <TextField id="standard-basic" label="Civilite" variant="standard" />
        <TextField id="standard-basic" label="Date de naissance " variant="standard" />
        <TextField id="standard-basic" label="Situation familiale" variant="standard" />
        <TextField id="standard-basic" label="Adresse" variant="standard" />
        <TextField id="standard-basic" label="telephone" variant="standard" />


      </Box>


    </div>
  )
}

export default Personneinfo