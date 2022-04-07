import React,{useRef} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Personneinfo = ({row, HandelAddPatient}) => {

  

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
        <TextField id="standard-basic" label="Nom" name = "Nom" variant="standard"  defaultValue={row ? row.Nom : null}  onChange = {HandelAddPatient} />
        <TextField id="standard-basic" label="Prenom" name = "prénom" variant="standard" defaultValue= {row ? row.Prénom  : null} onChange = {HandelAddPatient} />
        <TextField id="standard-basic" label="CIN" name = "CIN" variant="standard" defaultValue= {row ? row.CIN : null} onChange = {HandelAddPatient} />
        <TextField id="standard-basic" label="Civilite" name = "Civilité" variant="standard" defaultValue= {row ? row.Civilité : null} onChange = {HandelAddPatient} />
        <TextField
          id="standard-basic"
          label="Date de naissance "
          variant="standard"
          name = "Date_naissance"
          defaultValue= {row ? row.Date_naissance : null}
          onChange = {HandelAddPatient}
        />
        <TextField
          id="standard-basic"
          label="Situation familiale"
          variant="standard"
          name = "Situation_familiale"
          defaultValue= {row ? row.Situation_familiale : null}
          onChange = {HandelAddPatient}
        />
        <TextField id="standard-basic" label="Adresse" variant="standard" name = "Adresse" defaultValue= {row ? row.Adresse  : null} onChange = {HandelAddPatient} />
        <TextField id="standard-basic" label="telephone" variant="standard" name = "Tel" defaultValue= {row ? row.Tel  : null} onChange = {HandelAddPatient} />
      </Box>
    </div>
  );
};

export default Personneinfo;
