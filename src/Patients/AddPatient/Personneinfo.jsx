import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Personneinfo = ({row}) => {
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
        <TextField id="standard-basic" label={row ? row.Nom : "Nom"} variant="standard" />
        <TextField id="standard-basic" label="Prenom" variant="standard" value= {row ? row.Prénom  : null}/>
        <TextField id="standard-basic" label="CIN" variant="standard" value= {row ? row.CIN : null}/>
        <TextField id="standard-basic" label="Civilite" variant="standard" value= {row ? row.Civilité : null}/>
        <TextField
          id="standard-basic"
          label="Date de naissance "
          variant="standard"
          value= {row ? row.Date_naissance : null}
        />
        <TextField
          id="standard-basic"
          label="Situation familiale"
          variant="standard"
          value= {row ? row.Situation_familiale : null}
        />
        <TextField id="standard-basic" label="Adresse" variant="standard" value= {row ? row.Adresse  : null}/>
        <TextField id="standard-basic" label="telephone" variant="standard" value= {row ? row.Tel  : null}/>
      </Box>
    </div>
  );
};

export default Personneinfo;
