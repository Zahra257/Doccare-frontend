import React, { useEffect } from "react";
import { getListAssistantes } from "../Redux/Reducers/Assistante";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { Edit, Delete, UnfoldMore } from "@material-ui/icons";
import { Button } from "@mui/material";

const Assistante = () => {
  //Redux
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(getListAssistantes({ id: 16 }));
  }, [Dispatch]);

  const Assistantes = useSelector((state) => state.ListAssistantes.List);
  console.log(Assistantes);

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
            <Edit />
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
            <Delete />
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

  const rows = Assistantes;
  console.log(rows);

  return (
    <div>
      <div class="Lists">
        <div class="AddBtn">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#4f79ff",
              fontSize: "18px",
              boxShadow: "none",
            }}
          >
            +
          </Button>
        </div>

        <div
          style={{
            height: "100vh",
            width: "100%",
            margin: "40px 10px 10px 10px",
          }}
        >
          <DataGrid
            getRowId={(row) => row.Id}
            rows={rows}
            columns={columns}
            pageSize={25}
            rowsPerPageOptions={[8]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </div>
  );
};

export default Assistante;
