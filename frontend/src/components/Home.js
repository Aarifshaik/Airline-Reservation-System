import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';



const Home=()=> {   
    const [rows, setRows] = React.useState([]);
    const [formData, setFormData] = useState({
      captain: '',
      dest:'',
      dept: '',
      captain: '',
    })
  
    const fetchData = async () => {
      const res=await axios.get('http://localhost:8080/retrieve_flight');
      const dataWithSno = res.data.map((item, index) => ({ ...item, Sno: index + 1 }));
        
          setRows(dataWithSno)
          console.log(res.data)
    };
        
    
    useEffect(() => {
      fetchData()
    }, [])
  
    const updateData = async (id) => {
      console.log(id)
      const res = await axios.put(`http://localhost:8080/flights/${id}`, formData)
      fetchData()
      console.log(res.data)
    }
  
    const deleteData = async (id) => {
      console.log(id)
      const res = await axios.delete(`http://localhost:8080/flights/${id}`)
      fetchData()
      console.log(res.data)
    }
    const changeHandler = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const columns = [
        
      { field: 'Sno', headerName: 'Sno.', width: 90 ,align:'center',headerAlign: 'center', },
      {
        field: 'fid',
        headerName: 'Flight ID',
        width: 120,
        editable: true,
        align:'center',
        headerAlign: 'center',
      },
      {
        field: 'model',
        headerName: 'Model',
        width: 120,
        editable: true,
        align:'center',
        headerAlign: 'center',
      },
      {
        field: 'Airine',
        headerName: 'Airline',
        width: 120,
        editable: true,
        align:'center',
        headerAlign: 'center',
      },
      {
        field: 'dest',
        headerName: 'Destination',
        width: 150,
        editable: true,
        align:'center',
        headerAlign: 'center',
      },
      {
        field: 'dept',
        headerName: 'Departure',
        width: 100,
        editable: true,
        align:'center',
        headerAlign: 'center',
      },
      {
        field: 'captain',
        headerName: 'Captain',
        type: 'number',
        width: 120,
        editable: true,
        align:'center',
        headerAlign: 'center',
      },
      {
        field: 'occupancy',
        headerName: 'Occupancy',
        type: 'number',
        width: 100,
        editable: true,
        align:'center',
        headerAlign: 'center',
      },  
    
      {
        field: 'actions',
        headerName: 'Actions',
        align:'center',
        headerAlign: 'center',
        width: 280,
        renderCell: (params) => (
          <div>
            <Button variant="contained" startIcon={<CloudUploadIcon />} onClick={() => updateData(params.row._id)}>
              Update
            </Button>
            {' '}
            <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => deleteData(params.row._id)}>
              Delete
            </Button>
          </div>
        ),
      },
    
    ];
    
  return (
    <div style={{width:'100%' , height:'86vh'}}>
      <Box sx={{ height: '82%', width: '80%',marginLeft:'10%',marginRight:'10%,',marginTop:'2%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row)=>row._id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 9,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        disableRowSelectionOnClick
        
      />
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      marginLeft={'10%'}
      >
      <TextField id="outlined-basic" label="Captain" name='captain' variant="outlined" value={formData.captain} onChange={changeHandler} />
      <TextField id="outlined-basic" label="Destination" name='dest' variant="outlined" value={formData.dest} onChange={changeHandler} />      
      <TextField id="outlined-basic" label="Airline" name='Airline' variant="outlined" value={formData.Airline} onChange={changeHandler} />      
      <TextField id="outlined-basic" label="Departure" name='dept' variant="outlined" value={formData.dept} onChange={changeHandler} />
    </Box>
    </Box>
    </div>
   
  );
}
export default Home;