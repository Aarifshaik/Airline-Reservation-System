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



const FetchRegistration=()=> {   
    const [rows, setRows] = React.useState([]);
    const [formData, setFormData] = useState({
      Name: '',
      Role: '',
      email: '',
      // password: ''
    })
  
    const fetchData = async () => {
      const res=await axios.get('http://localhost:8080/retrieve');
      const dataWithSno = res.data.map((item, index) => ({ ...item, Sno: index + 1 }));
        
          setRows(dataWithSno)
          console.log(res.data)
    };
        
    
    useEffect(() => {
      fetchData()
    }, [])
  
    const updateData = async (id) => {
      console.log(id)
      const res = await axios.put(`http://localhost:8080/users/${id}`, formData)
      fetchData()
      console.log(res.data)
    }
  
    const deleteData = async (id) => {
      console.log(id)
      const res = await axios.delete(`http://localhost:8080/users/${id}`)
      fetchData()
      console.log(res.data)
    }
    const changeHandler = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const columns = [
        
      { field: 'Sno', headerName: 'Sno.', width: 90 ,align:'center',headerAlign: 'center', },
      {
        field: 'Name',
        headerName: 'Name',
        width: 180,
        editable: true,
        align:'center',
        headerAlign: 'center',
      },
      {
        field: 'Role',
        headerName: 'Role',
        width: 150,
        editable: true,
        align:'center',
        headerAlign: 'center',
      },
      {
        field: 'email',
        headerName: 'Email',
        type: 'number',
        width: 220,
        editable: true,
        align:'center',
        headerAlign: 'center',
      },  
    
      {
        field: 'actions',
        headerName: 'Actions',
        align:'center',
        headerAlign: 'center',
        width: 250,
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
      <Box sx={{ height: '82%', width: '60%',marginLeft:'20%',marginRight:'20%,',marginTop:'2%' }}>
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
      <TextField id="outlined-basic" label="Name" name='Name' variant="outlined" value={formData.Name} onChange={changeHandler} />
      <FormControl variant="outlined">
        <InputLabel >Role</InputLabel>
          <Select
            labelId="role-label"
            value={formData.Role}
            name='Role'
            label="Role"
            onChange={changeHandler}
          >
            <MenuItem value={"Student"}>Student</MenuItem>
            <MenuItem value={"Counsellor"}>Counsellor</MenuItem>
            <MenuItem value={"Visitor"}>Visitor</MenuItem>
            <MenuItem value={"Admin"}>Admin</MenuItem>
          </Select>
      </FormControl>          
      <TextField id="outlined-basic" label="Email" name='email' variant="outlined" value={formData.email} onChange={changeHandler} />
    </Box>
    </Box>
    </div>
   
  );
}
export default FetchRegistration;