import React,{useEffect} from 'react'
import { getListAllConsultations } from '../Redux/Reducers/ListConsultation'
import { useSelector, useDispatch } from 'react-redux'
import { DataGrid } from "@mui/x-data-grid";
import { Edit, Delete, UnfoldMore } from "@material-ui/icons";


const Consultations = () => {

  //Redux
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(getListAllConsultations({ id: 16 }));
  }, [Dispatch]);

  const Consultations = useSelector((state) => state.ListConsultation.List);
  console.log(Consultations)

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

  const rows = Consultations;
  console.log(rows);

  
  return (
    <div  class="Lists">
       <div
        style={{
          height: "100vh",
          width: "100%",
          margin: "110px 10px 10px 10px",
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
  )
}

export default Consultations