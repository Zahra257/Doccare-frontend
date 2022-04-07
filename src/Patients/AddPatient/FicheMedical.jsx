import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const FicheMedical = ({row, HandelAddPatient}) => {
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
        <TextField id="standard-basic" label="Poids" variant="standard" name = "Poids" defaultValue= {row ? row.Poids : 0}  onChange = {HandelAddPatient}/>
        <TextField id="standard-basic" label="Taille" variant="standard" name = "Taille" defaultValue= {row ? row.Taille : 0} onChange = {HandelAddPatient}/>
        <TextField id="standard-basic" label="Maladie chronique" variant="standard" name = "Maladie_chronique" defaultValue= {row ? row.Maladie_chronique  : ""} onChange = {HandelAddPatient}/>
        <TextField id="standard-basic" label="Groupe sanguin" variant="standard"  name = "Groupe_sanguin" defaultValue= {row ? row.Groupe_sanguin   : ""} onChange = {HandelAddPatient}/>
        <TextField id="standard-basic" label="Maladie infectueuse" variant="standard" name = "Maladie_infectueuse" defaultValue= {row ? row.Maladie_infectueuse  : ""} onChange = {HandelAddPatient}/>
        <TextField id="standard-basic" label="Allergie" variant="standard" name = "Allergie" defaultValue= {row ? row.Allergie : ""} onChange = {HandelAddPatient}/>
        <TextField id="standard-basic" label="Habitude toxique" variant="standard" name = "Habitude_toxique" defaultValue= {row ? row.Habitude_toxique : ""}onChange = {HandelAddPatient} />
        <TextField id="standard-basic" label="Chirurgie antérieure" variant="standard" name = "Chirurgie antérieure" defaultValue= {row ? row.Chirurgie_antérieure : ""} onChange = {HandelAddPatient}/>
        <TextField id="standard-basic" label="Maladie héréditaire" variant="standard" name = "Maladie_héréditaire"  defaultValue= {row ? row.Maladie_héréditaire : ""} onChange = {HandelAddPatient}/>
        <TextField id="standard-basic" label="Autre antécédants" variant="standard"  name = "Autre_antécédants" defaultValue= {row ? row.Autre_antécédants : ""}onChange = {HandelAddPatient} />

      </Box>
    </div>
  );
};

export default FicheMedical;
