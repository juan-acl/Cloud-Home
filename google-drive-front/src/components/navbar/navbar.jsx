import { AppBar, Button, FormGroup, Toolbar, Typography, Switch, FormControlLabel } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import {url} from '../url'
import Axios from 'axios'


  


function NavBar() {

 

  const [theme, setTheme] = useState(true);
  const [files, setFiles] = useState([])
  const [open, setOpen] = useState(false)

  const changeTheme = (e) => {
    setTheme(!theme);
  }

  const onClick = (e) => {
    setOpen(prevState => !prevState)
  }

  const fileUpload = (e) => {
    Axios.post(url + 'file/upload')
    .then((res) => {
      setFiles(res.data.files)
    })
  }

  const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,

    width: {
      xs: 100,
      sm: 200,
      md: 300,
      lg: 400,
      xl: 500
    },
}));


  const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


  return (
<>

    <div>
    <Box sx={{felxGrow: 1, }} > 
      <AppBar position="static" > 
          <Toolbar sx={{background: '#000'}} >
            <FormGroup>
              <FormControlLabel
                control={
                    <Switch
                      checked = {theme}
                      onChange = {changeTheme}
                      defaultChecked />
                }
            label= {theme ? 'Dark mode' : 'Light mode'}
            />
            </FormGroup>
            <Typography
                variant="h5"
                component='div'
                sx={{ flexGrow: 3, textAlign: 'center'}}
              >
              HOME CLOUD
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon/>
              </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search..."
                  
                />
            </Search>
          </Toolbar>
      </AppBar>
  </Box>
    </div>

</>
  )
}

export {NavBar};
