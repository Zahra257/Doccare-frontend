import React, { useEffect } from "react";
import { DeletePatient, getListPatients } from "../Redux/Reducers/Patients";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { Edit, Delete, UnfoldMore, Add } from "@material-ui/icons";
import { Button } from "@mui/material";
import CustomizedDialogs from "./AddPatient/AddDialog";
import AddPatient from "./AddPatient/AddPatient";
import Typography from "@mui/material/Typography";

const PatientsList = (props) => {
  //Redux
  const Dispatch = useDispatch();

  useEffect(() => {
    return Dispatch(getListPatients({ id: 16 }));
  });



  useEffect(() => {
    Dispatch(getListPatients({ id: 16 }));
  }, [Dispatch]);

  const patients = useSelector((state) => state.ListPatients.List);

  const columns = [
    { field: "Nom", headerName: "Nom", width: 130 },
    { field: "Prénom", headerName: "Prénom", width: 130 },
    { field: "Civilité", headerName: "Civilité", width: 100 },
    {
      field: "Date_naissance",
      headerName: "Date de naissance",
      type: "number",
      width: 150,
    },
    {
      field: "Maladie_traitée",
      headerName: "Maladie traitée",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 130,
    },

    { field: "Date_creation", headerName: "Date d'inscription", width: 150 },

    {
      field: "Edit",
      headerName: "",
      width: 50,
      renderCell: (params) => {
        return (
          <>
            <CustomizedDialogs Type="-">
              <AddPatient Row={params.row} />
            </CustomizedDialogs>
          </>
        );
      },
    },
    {
      field: "Delete",
      headerName: "",
      width: 50,
      renderCell: (params) => {
        return (
          <>
            <CustomizedDialogs Type="=">
            <Typography sx={{ mt: 2, mb: 1 }}>      
                Vous etes sur que vous voulez supprimer ce patient
            </Typography>
            <Button
                onClick={() => {
                  
                  Dispatch(DeletePatient({id : params.row.IdPatient}))
                  props.onClose()
                }}
                  
                sx={{ ml: 30, mt : 2 }}
              >
                Yes
              </Button>
              <Button
                variant="contained"
                sx={{ ml: 1, mt : 2 }}
              >
                No
              </Button>
              
            </CustomizedDialogs>
          </>
        );
      },
    },

    {
      field: "UnfoldMore",
      headerName: "",
      width: 50,
      renderCell: (params) => {
        return (
          <>
            <UnfoldMore />
          </>
        );
      },
    },
  ];

  const rows = patients;

  return (
    <div class="Lists">
      <div class="AddBtn">
        <h2>Liste des patients</h2>
        {/*<Button variant="contained" style = {{backgroundColor: "#4f79ff", fontSize: "18px",borderRadius : "80px", boxShadow: "none"}}>
        +
  </Button>*/}

        <CustomizedDialogs Type="+">
          <AddPatient />
        </CustomizedDialogs>
      </div>

      <div
        style={{
          height: "100vh",
          width: "100%",
          margin: "30px 10px 10px 10px",
        }}
      >
        <DataGrid
          getRowId={(row) => row.IdPatient}
          rows={rows}
          columns={columns}
          pageSize={25}
          rowsPerPageOptions={[8]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default PatientsList;
