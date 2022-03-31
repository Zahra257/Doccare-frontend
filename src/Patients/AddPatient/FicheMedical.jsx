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
        <TextField id="standard-basic" label="Poids" variant="standard" value= {row ? row.Poids : ""} />
        <TextField id="standard-basic" label="Taille" variant="standard" value= {row ? row.Taille : ""} />
        <TextField id="standard-basic" label="Maladie chronique" variant="standard" value= {row ? row.Maladie_chronique  : ""} />
        <TextField id="standard-basic" label="Groupe sanguin" variant="standard"  value= {row ? row.Groupe_sanguin   : ""} />
        <TextField id="standard-basic" label="Maladie infectueuse" variant="standard"value= {row ? row.Maladie_infectueuse  : ""} />
        <TextField id="standard-basic" label="Allergie" variant="standard" value= {row ? row.Allergie : ""} />
        <TextField id="standard-basic" label="Habitude toxique" variant="standard" value= {row ? row.Habitude_toxique : ""} />
        <TextField id="standard-basic" label="Chirurgie antérieure" variant="standard" value= {row ? row.Chirurgie_antérieure : ""} />
        <TextField id="standard-basic" label="Maladie héréditaire" variant="standard"  value= {row ? row.Maladie_héréditaire : ""} />
        <TextField id="standard-basic" label="Autre antécédants" variant="standard"  value= {row ? row.Autre_antécédants : ""} />

      </Box>
    </div>
  );
};

export default FicheMedical;
